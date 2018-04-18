const db_connection = require('../db_connection');
let sql = `INSERT INTO books (book_name, year, author) VALUES (' Hard Times ',' 1850 ',' charles Dickens) `;

const insertBooks = (cb) => {
  db_connection.query(sql,(err, res) => {

      if (err) {
        return cb(err);
      } else {
        cb(null, res)
      }
    });

  };

module.exports = {
  insertBooks
};
