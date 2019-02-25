-- DDL --
drop public synonym users;
drop public synonym games;
--drop public synonym new_game_id;
drop public synonym delete_user;
drop public synonym insert_user;
drop public synonym get_user;
drop public synonym promote_user;
drop public synonym create_game;
drop public synonym join_game;
drop public synonym start_game;
drop public synonym make_bet;
drop public synonym change_turn;
drop public synonym change_status;
drop public synonym end_game;
drop public synonym encrypt_password;
drop table users;
drop table games;
drop sequence new_user_id;
--drop sequence new_game_id;
drop user super;

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
    current_turn number(4) not null,
    round_started number(1) not null,
    --
    constraint game_id_pk primary key(game_id)
); -- for tables, you put ;

insert into games values( 0,'closed',0,0,0,0);

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
    turn_number number(1) not null,
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
insert into games values(game_id, 'pending', 0, 100, 0, 0);
update users set current_game=game_id where username=host_username;
commit;-- saves changes
end;
/
create or replace procedure start_game(game in varchar, current_status out varchar)
as
begin
current_status := change_status(game);
update users set total_games=total_games+1 where current_game=game;
update games set round_started=1 where game_id=game;
commit;-- saves changes
end;
/
create or replace procedure join_game(game in varchar, in_user in varchar, success out Integer)
as
number_players number;
temp_varchar varchar(50);
begin
select count(*) into number_players from users where current_game=game and username=in_user;
if number_players=0 then
    update users set current_game=game where username=in_user and exists(select game_id from games where game_id=game);
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
create or replace procedure make_bet(game in varchar, in_user in varchar, in_target in Decimal, in_action varchar, out_difference out number)
as
difference Decimal(15,2);
number_players number(1);
players_at_min number(1);
round_begun number(1);
temp_varchar varchar(15);
begin
select count(username) into number_players from users,games where game_id=game and username=in_user and current_turn=turn_number;
select status into temp_varchar from games where game_id=game;
if number_players>0 and temp_varchar!='pending' and temp_varchar!='closed' then
    select round_started into round_begun from games where game_id=game;
    difference := 0;
    if in_action='call' and round_begun=1 then
        select current_target-round_bet into difference from users,games where username=in_user and game_id=game;
    elsif in_action='bet' and round_begun=0 then
        select in_target-round_bet into difference from users where username=in_user;
        update games set current_target=in_target,round_started=1 where game_id=game;
    elsif in_action='raise' and round_begun=1 then
        select in_target-round_bet into difference from users where username=in_user;
        update games set current_target=in_target where game_id=game;
    elsif in_action='fold' then
        update users set current_game=0 where user_id=in_user;
    end if;
    update games set pot=pot+difference where game_id=game;
    update users set round_bet=round_bet+difference,balance=balance-difference where username=in_user;
    
    select count(username) into number_players from users where current_game=game;
    select count(username) into players_at_min from users,(select current_target from games where game_id=game) where current_game=game and round_bet=current_target;
    
    dbms_output.put_line(number_players);
    dbms_output.put_line(players_at_min);
    out_difference := difference;
    if number_players=players_at_min and round_begun=1 then
        update games set current_turn=0,current_target=0,round_started=0 where game_id=game;
        update users set round_bet=0 where current_game=game;
        if change_status(game)='closed' then
            dbms_output.put_line('closed');
            out_difference := out_difference+0.002;
            dbms_output.put_line(out_difference);
        else
            dbms_output.put_line('not closed');
            out_difference := out_difference+0.001;
            dbms_output.put_line(out_difference);
        end if;
        out_difference := out_difference*-1;
        dbms_output.put_line(out_difference);
    else
        number_players := change_turn(game);
        update games set current_turn=number_players where game_id=game;
    end if;
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
have_next := 0;
select max(turn_number) into max_turn from users where current_game=game;
select current_turn into next_turn from games where game_id=game;
while have_next=0
loop
    next_turn := next_turn+1;
    if next_turn>max_turn then
        next_turn := 0;
    end if;
    select count(username) into have_next from users where current_game=game and turn_number=next_turn;
end loop;
commit;-- saves changes
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
    current_status := 'pre-flop';
elsif current_status='pre-flop' then
    current_status := 'flop';
elsif current_status='flop' then
    current_status := 'turn';
elsif current_status='turn' then
    current_status := 'river';
elsif current_status='river' then
    current_status := 'closed';
end if;
update games set status=current_status where game_id=game;
return current_status;
commit;-- saves changes
end;
/
create or replace procedure end_game(game in varchar, winners in varchar)
as
number_winners number(1);
winnings decimal(15,2);
begin
select length(winners) into number_winners from dual;
select pot/number_winners into winnings from games where game_id=game;
update games set pot=winnings,current_turn=cast(winners as number(4)) where game_id=game;
for i in 1..number_winners loop
    update users set balance=balance+winnings,total_wins=total_wins+1 where current_game=game and turn_number=cast(substr(winners,i,1) as number);
end loop;
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
create public synonym get_user for admin01.get_user;
create public synonym promote_user for admin01.promote_user;
create public synonym create_game for admin01.create_game;
create public synonym join_game for admin01.join_game;
create public synonym start_game for admin01.start_game;
create public synonym make_bet for admin01.make_bet;
create public synonym change_turn for admin01.change_turn;
create public synonym change_status for admin01.change_status;
create public synonym end_game for admin01.end_game;
create public synonym encrypt_password for admin01.encrypt_password;

call insert_user('super', 'fuksyr@gmail.com', 'superpass');
call promote_user('super');
create user super identified by superpass;
grant dba to super with admin option;
commit;