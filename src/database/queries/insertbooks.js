const db_connection = require('../db_connection');
let sql = { text:'INSERT INTO books (book_name, year, author) VALUES ($1, $2, $3)', values: [book_name, year, author]};

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


' Hard Times ', 1850 ,' charles Dickens'