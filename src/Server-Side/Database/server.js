const express = require('express');
const mongoose = require('mongoose'); 
const mysql = require('mysql');
const config = require('config')
var bodyParser = require('body-parser')
var cors = require('cors')

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

const PORT = process.env.PORT || 5000;

const registrationRoute = require('../api/routes/Registration')
const authRoute = require('../api/routes/Auth')

//API Routes
app.use('/registration', registrationRoute)
app.use('/auth', authRoute)

// Start the server
app.listen(PORT, () => {
 console.log('Server is listening on port ' + PORT);
 console.log("Connected!");

});