const express = require('express');
const mongoose = require('mongoose'); 
const config = require('config')
var cors = require('cors')

// Initialize the app
const app = express();
const multer = require('multer');

app.use(cors());
app.use(express.json())

const db = config.get('mongoURI'); 

mongoose
  .connect(db, { 
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  }) // Adding new mongo url parser
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

const PORT = process.env.PORT || 5000;

const registrationRoute = require('../api/routes/Registration')
const authRoute = require('../api/routes/Auth')
const memberProfileRoute = require('../api/routes/MemberProfile');

//API Routes
app.use('/registration', registrationRoute)
app.use('/auth', authRoute)
app.use('/user', memberProfileRoute)

// Start the server
app.listen(PORT, () => {
 console.log('Server is listening on port ' + PORT);
 console.log("Connected!");

});