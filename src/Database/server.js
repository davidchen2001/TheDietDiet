const express = require('express');
const mongoose = require('mongoose'); 
const mysql = require('mysql');
const config = require('config')
var bodyParser = require('body-parser')
var cors = require('cors')
//const path = require("path");
// https://github.com/mysqljs/mysql

// Initialize the app
const app = express();
const multer = require('multer');
const upload = multer({dest: 'Image Uploads/'}); 

app.use(cors());
app.use(express.json())

const db = config.get('mongoURI'); 

mongoose
  .connect(db, { 
    useNewUrlParser: true,
    useCreateIndex: true
  }) // Adding new mongo url parser
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

const port = process.env.PORT || 5000;

//var Users = require('../Database/UserAuth')
//var members = require('../Database/routes/api/Members')
//var helpers = require('../Database/routes/api/')

app.use('/UserSignUp', require('../Database/routes/api/UserSignUp'))
app.use('/Auth', require('../Database/routes/api/Auth'))

// Start the server
app.listen(port, () => {
 console.log('Server is listening on port ' + port);
 console.log("Connected!");

});