const db_connection = require('../database/db_connection');
const reserve = (cb) => {
  db_connection.query('SELECT * RROM books where books.id = reserve.book_id',
    (err, res) => {
      if (err) {
        return cb(err);
      } else {
        cb(null, res.rows);
      }
    });
};

module.exports = {reserve};
