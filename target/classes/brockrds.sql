-- DDL --
drop public synonym users;
drop public synonym games;
--drop public synonym new_game_id;
drop public synonym delete_user;
drop public synonym insert_user;
drop public synonym get_user;
drop public synonym promote_user;
drop public synonym create_game;
drop public synonym update_game;
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
    --
    constraint game_id_pk primary key(game_id)
); -- for tables, you put ;

insert into games values( 0,'closed');

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
insert into users values(new_user_id.nextval, username, 10000.00, email, encrypt_password(username, password), 0, 0, 0, 0);
commit;-- saves changes
end;
/

create or replace procedure get_user(input_username in varchar, input_password in varchar, 
output_id out number, output_email out varchar, output_superuser out number, output_game out number,
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
insert into games values(game_id, 'ongoing');
update users set current_game=game_id where username=host_username;
commit;-- saves changes
end;
/

create or replace procedure update_game(game varchar, input_status varchar)
as
begin
update games set status=input_status where game_id=game;
commit;-- saves changes
end;
/

---- TCL --
create public synonym users for bsokevitz.users;
create public synonym games for bsokevitz.games;
--create public synonym new_game_id for bsokevitz.new_game_id;
--create public synonym new_transaction_id for bsokevitz.new_transaction_id;
create public synonym delete_user for bsokevitz.delete_user;
create public synonym insert_user for bsokevitz.insert_user;
create public synonym get_user for bsokevitz.get_user;
create public synonym promote_user for bsokevitz.promote_user;
create public synonym create_game for bsokevitz.create_game;
create public synonym update_game for bsokevitz.update_game;
create public synonym encrypt_password for bsokevitz.encrypt_password;

call insert_user('super', 'fuksyr@gmail.com', 'superpass');
call promote_user('super');
call create_game('1234', 'super');
call update_game('1', 'closed');
create user super identified by superpass;
grant dba to super with admin option;
commit;