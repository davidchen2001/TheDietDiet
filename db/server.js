const express = require('express');
const mongoose = require('mongoose'); 
const config = require('config')
const multer = require('multer');

const cors = require('cors')

// Initialize the app
const app = express();

app.use(cors());
app.use(express.json())

//Images received are stored a static uploads folder on the server side
app.use('/uploads', express.static('uploads'));
app.use(express.urlencoded({limit: '5mb', extended: true}))

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

const authRoute = require('../api/routes/users');
const imageRoute = require('../api/routes/images');

//API Routes
app.use('/api/auth', authRoute)
app.use('/api/images', imageRoute)

// Start the server
app.listen(PORT, () => {
 console.log('Server is listening on port ' + PORT);
 console.log("Connected!");

});