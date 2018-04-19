
# books
![alt text](https://dailygenius.com/wp-content/uploads/2014/06/stack_of_books.jpg)


## What?

Our website that give you ability to add books that you don't need it. then show the library to reserve (will do it next week).

## How?

Firstly we worked on the modularization of our code ,and file structure, then work on DATABASE (create tables,insert to tables).

![alt text](https://files.gitter.im/week5/Lobby/oOlV/Screenshot-from-2018-04-19-10-25-23.png)

## How to use ?

our site view available books list to the user ,
user can enter the book name , author of book and the year of deploy. Then user can reserve any book available for him with specific days .


```
CREATE DATABASE [db_name];
   CREATE USER [user_name] WITH SUPERUSER PASSWORD ['password'];
```
Now you can set the test database url in your config.env as follows (setting the values in square brackets to the values you defined in the steps above):
TEST_DB_URL = postgres://[user_name]:[password]@localhost:5432/[db_name]

```
Next open psql/pgcli in terminal and connect to your test database: \c [test_database_name]
```

Next you will run the db_build.sql file to create the schema and populate your test database with data: \i [full_path_to_db_build.sql]


#### [Our website on heroku](https://onlinebooks1.herokuapp.com/)

Done By : Abdalsamad ,Inass, Haneen,Razan.
