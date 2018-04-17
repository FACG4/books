BEGIN;

DROP TABLE IF EXISTS users, books, reserve cascade;

CREATE TABLE books (
  id serial PRIMARY KEY,
  book_name VARCHAR(50) NOT NULL,
  year INTEGER NOT NULL,
  author VARCHAR(20) NOT NULL,
);

CREATE TABLE users (
  id serial PRIMARY KEY,
  first_name  VARCHAR(20) NOT NULL,
  last_name VARCHAR(20) NOT NULL,
  email VARCHAR(20) NOT NULL UNIQUE,
);

CREATE TABLE reserve (
  id serial PRIMARY KEY,
  user_id INTEGER REFERENCES users (id),
  book_id INTEGER REFERENCES books (id),
  start_date date NOT NULL
);

INSERT INTO books (book_name, year, author) VALUES 
('Eloquent JavaScript', 2017, 'Marijn Haverbeke'),
("You Don't Know JS", 2014,'Kyle Simpson'),
("Automate the Boring Stuff with Python", 2015, 'Al Sweigart'),
('Think Python', 2015, 'Allen B. Downey'),
('JavaScript Patterns', 2010, 'Stoyan Stefanov');

INSERT INTO users (first_name, last_name, email, password) VALUES 
('Haneen', 's', 'haneen@gmail.com', '123'),
('Abdalsamad', 'm', 'abdalsamad.y.m@gmail.com', '159'),
('John', 'Doe', 'johndoe@gmail.com', 'jo123'),
('Jane', 'Doete', 'jane@gmail.com', 'je852');

INSERT INTO reserve (user_id, book_id, start_date, end_date) VALUES 
(1,1,'2018-1-5', '2018-2-15'),
(2,2, '2018-3-11','2018-8-15'),
(3,4, '2018-4-17', '2018-4-25');

COMMIT;