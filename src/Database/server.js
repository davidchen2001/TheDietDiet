const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
// https://github.com/mysqljs/mysql

const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'me',
  password : 'secret',
  database : 'DataBase'
});

// Initialize the app
const app = express();
const multer = require('multer');
const upload = multer({dest: 'Image Uploads/'}); 

// https://expressjs.com/en/guide/routing.html
app.get('/posts', function (req, res) {
    connection.connect();
    var userTable = "CREATE TABLE Users (firstName VARCHAR(255), lastName VARCHAR(255), username VARCHAR(255), emailAddress VARCHAR(255), homeHelperName VARCHAR(255), workHelperName VARCHAR(255), status VARCHAR(10))";

    //var imageTable = "CREATE TABLE Images (username VARCHAR(255), typeOfImage VARCHAR(255), imagePath VARCHAR(255))";

    connection.query(userTable, function (error, results, fields) {
      if (error) throw error;
      res.send(results)
    });

    connection.end();
});

// Start the server
app.listen(3000, () => {
 console.log('Go to http://localhost:3000/posts to see posts');
});