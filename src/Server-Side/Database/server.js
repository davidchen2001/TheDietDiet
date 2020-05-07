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

//API Routes
app.use('/Registration', require('../AuthRoutes/Registration'))
app.use('/Login', require('../AuthRoutes/Login'))

// Start the server
app.listen(port, () => {
 console.log('Server is listening on port ' + port);
 console.log("Connected!");

});