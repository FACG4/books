const fs = require('fs');
const querystring = require('querystring');
const path = require('path');


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

module.exports = {handlePublic};



