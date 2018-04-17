const db_connection = require('../database/db_connection');

const insertBooks(cb) => {
  db_connection.query('INSERT INTO books (book_name, year, author) VALUES ('
    Hard Times ','
    1850 ','
    charles Dickens ')',
    (err, res) => {

      if (err) {
        return cb(err);
      } else {
        cb(null, res)
      }
    }

  });

module.exports = {
  insertBooks
};
