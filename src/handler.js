const fs = require('fs');
const querystring = require('querystring');
const path = require('path');
const insertbooks = require('./database/queries/insertbooks');

const contentType = {
  html: 'text/html',
  css: 'text/css',
  js: 'application/javascript',
  jpg: 'image/jpg',
  png: 'image/png',
  json: 'application/json',
  ico: 'image/ico'
};

const handlePublic = (res, endpoint) => {
  const extention = endpoint.split('.')[1];
  fs.readFile(path.join(__dirname, '..', endpoint), (error, data) => {
    if (error) {
      res.writeHead(500, 'Content-Type:text/html');
      res.end(
        '<h1>Sorry, there was a problem loading the homepage</h1>'
      );
      console.log(error);
    } else {
      res.writeHead(200, {
        'Content-Type': contentType[extention],
      });
      res.end(data);
    }
  });
};

const handleInsert = (req, res) => {
  let data = '';
  req.on('data', (chunk) => {
    data += chunk;
  });
  req.on('end', () => {
    const book = querystring.parse(data);
    
    const {name:book_name, year, author} = book;
    console.log(book);
    insertbooks.insertBooks(book_name, year, author, (err, result)=> {
      if (err) {
        res.writeHead(500, 'Content-Type: text/html');
        res.end('<h1>Sorry, there was a problem adding that book</h1>');
        console.log(err);
      } else {
        res.writeHead(200, 'Content-Type: text/html');
        res.end('<h1>successfully added</h1>');
      }
    });
  });
}

module.exports = {handlePublic,handleInsert};



