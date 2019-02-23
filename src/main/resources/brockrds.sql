-- DDL --
drop public synonym users;
drop public synonym games;
--drop public synonym new_game_id;
drop public synonym delete_user;
drop public synonym insert_user;
drop public synonym update_user_bet;
drop public synonym get_user;
drop public synonym promote_user;
drop public synonym create_game;
drop public synonym join_game;
drop public synonym start_game;
drop public synonym make_bet;
drop public synonym change_turn;
drop public synonym change_status;
drop public synonym encrypt_password;
drop table users;
drop table games;
drop sequence new_user_id;
--drop sequence new_game_id;
drop user super;
drop user brock;

--create sequence new_game_id
--minvalue 1
--start with 1
--increment by 1
--nocache;

create sequence new_user_id
minvalue 1
start with 1
increment by 1
nocache;

create table games
(
    game_id varchar(50) not null,
    status varchar(15) default('pending') not null,
    pot Decimal(15,2) default(0) not null,
    current_target Decimal(15,2) default(100) not null,
    current_turn number(1) not null,
    --
    constraint game_id_pk primary key(game_id)
); -- for tables, you put ;

insert into games values( 0,'closed',0,0,0);

-- DDL --
create table users
(   
    user_id number not null,
    username varchar(25) not null,
    balance Decimal(15,2) default(10000) not null,
    email varchar(50) not null,
    password varchar(150) not null,
    superuser number not null,
    current_game varchar(50) not null,
    round_bet Decimal(15,2) not null,
    turn_number Decimal(1) not null,
    total_games number not null,
    total_wins number not null,
    --
    constraint user_id_pk primary key(user_id),
    constraint unq_username unique (username),
    constraint unq_email unique (email),
    constraint game_id_fk foreign key (current_game) references games(game_id)
); -- for tables, you put ;

--hashing function that combines password and extra salt
create or replace function encrypt_password(username varchar, password varchar) return varchar
is
extra varchar(10) := '0L2di59Fw7';
begin
    return to_char(DBMS_OBFUSCATION_TOOLKIT.MD5(
  INPUT => UTL_I18N.STRING_TO_RAW(DATA => username || password || extra)));
end;
/

create or replace procedure delete_user(input_username varchar)
as
begin
delete from users where username = input_username;
commit;-- saves changes
end;
/

create or replace procedure insert_user(username varchar, email varchar, password varchar)
as
begin
insert into users values(new_user_id.nextval, username, 10000.00, email, encrypt_password(username, password), 0, 0, 0, 0, 0, 0);
commit;-- saves changes
end;
/

create or replace procedure get_user(input_username in varchar, input_password in varchar, 
output_id out number, output_email out varchar, output_superuser out number, output_game out varchar,
 output_balance out number, output_total out number, output_wins out number)
as
begin
select user_id, balance, email, superuser, current_game, total_games, total_wins 
into output_id, output_balance, output_email, output_superuser, output_game, output_total, output_wins  
from users 
where username=input_username and password=encrypt_password(input_username, input_password);
commit;-- saves changes
end;
/

create or replace procedure promote_user(input_username varchar)
as
begin
update users set superuser=25 where username=input_username;
commit;-- saves changes
end;
/

create or replace procedure create_game(game_id varchar, host_username varchar)
as
begin
insert into games values(game_id, 'pending', 0, 100, 0);
update users set current_game=game_id where username=host_username;
commit;-- saves changes
end;
/
create or replace procedure start_game(game in varchar, current_status out varchar)
as
begin
current_status := change_status(game);
end;
/
create or replace procedure join_game(game in varchar, in_user in varchar, success out Integer)
as
number_players number;
temp_varchar varchar(50);
begin
select count(*) into number_players from users where current_game=game;
if number_players=0 then
    update (select current_game, game_id from games, users where game_id=game and status='pending' and username=in_user) set current_game=game_id;
    success := SQL%ROWCOUNT;
    select count(*) into number_players from users where current_game=game;
    if number_players=4 then
        start_game(game,temp_varchar);
    end if;
else
    success := 1;
end if;
commit;-- saves changes
end;
/
create or replace procedure make_bet(game in varchar, in_user in varchar, in_target in Decimal, out_difference out Decimal)
as
difference Decimal(15,2);
number_players number(1);
players_at_min number(1);
temp_varchar varchar(15);
begin
if in_target=0 then
    select current_target-round_bet into difference from users,games where username=in_user and game_id=game;
else
    select in_target-round_bet into difference from users where username=in_user;
    update games set current_target=in_target where game_id=game;
end if;
out_difference := difference;
update games set pot=pot+difference where game_id=game;
update users set round_bet=round_bet+difference,balance=balance-difference where username=in_user;

select count(*) into number_players from users where current_game=game;
select count(*) into players_at_min from users where current_game=game and round_bet=in_target;

if number_players=players_at_min then
    update games set current_turn=0 where game_id=game;
    temp_varchar := change_status(game);
else
    update games set current_turn=change_turn(game) where game_id=game;
end if;
commit;-- saves changes
end;
/
create or replace function change_turn(game varchar) return number
is
next_turn number;
max_turn number;
have_next number;
begin
select max(turn_number) into max_turn from users where current_game=game;
select next_turn into next_turn from games where game_id=game;
while have_next=0
loop
    next_turn := next_turn+1;
    if next_turn>max_turn then
        next_turn := 0;
    end if;
    select count(*) into have_next from users where current_game=game and turn_number=next_turn;
end loop;
update games set current_turn=next_turn where game_id=game;
return next_turn;
end;
/
create or replace function change_status(game varchar) return varchar
as
current_status varchar(50);
begin
select status into current_status from games where game_id=game;
update users set round_bet=0 where current_game=game;
if current_status='pending' then
update games set status='pre-flop' where game_id=game;
elsif current_status='pre-flop' then
update games set status='flop' where game_id=game;
elsif current_status='flop' then
update games set status='turn' where game_id=game;
elsif current_status='turn' then
update games set status='river' where game_id=game;
elsif current_status='river' then
update games set status='closed' where game_id=game;
end if;
commit;-- saves changes
end;
/

---- TCL --
create public synonym users for admin01.users;
create public synonym games for admin01.games;
--create public synonym new_game_id for bsokevitz.new_game_id;
--create public synonym new_transaction_id for bsokevitz.new_transaction_id;
create public synonym delete_user for admin01.delete_user;
create public synonym insert_user for admin01.insert_user;
create public synonym update_user_bet for admin01.update_user_bet;
create public synonym get_user for admin01.get_user;
create public synonym promote_user for admin01.promote_user;
create public synonym create_game for admin01.create_game;
create public synonym join_game for admin01.join_game;
create public synonym start_game for admin01.start_game;
create public synonym make_bet for admin01.make_bet;
create public synonym change_turn for admin01.change_turn;
create public synonym change_status for admin01.change_status;
create public synonym encrypt_password for admin01.encrypt_password;

call insert_user('super', 'fuksyr@gmail.com', 'superpass');
call promote_user('super');
call create_game('1234', 'super');
call update_game('1', 'closed');
create user super identified by superpass;
grant dba to super with admin option;
commit;