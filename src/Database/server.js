const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const routes = require('./routes')
  , http = require('http')
  , path = require('path'),
	busboy = require("then-busboy"),
	fileUpload = require('express-fileupload'),
  bodyParser = require("body-parser");
  
  // Initialize the app
const app = express();

const multer = require('multer');
const upload = multer({dest: 'Image Uploads/'}); 

// https://github.com/mysqljs/mysql

const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'me',
  password : 'secret',
  database : 'DataBase'
});

// all environments
app.set('port', process.env.PORT || 8080);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(fileUpload());

var userTable = "CREATE TABLE Users (name VARCHAR(100), username VARCHAR(255), emailAddress VARCHAR(255), homeHelperName VARCHAR(255), workHelperName VARCHAR(255), status VARCHAR(10))";

//var imageTable = "CREATE TABLE Images (username VARCHAR(255), typeOfImage VARCHAR(255), imagePath VARCHAR(255))";

// https://expressjs.com/en/guide/routing.html
app.get('/posts', function (req, res) {
    connection.connect();

    if (req.method == "POST") {
      
      //These variables are taking data from the database 
      /*
      var post  = req.body;
      var name = post.user_name;
      var pass = post.password;
      var fname = post.first_name;
      var lname = post.last_name;
      var mob = post.mob_no;
      */

	  if (!req.files)
		  return res.status(400).send('No files were uploaded.');
 
		var file = req.files.uploaded_image;
		var img_name = file.name;
 
	  	if(file.mimetype == "image/jpeg" ||file.mimetype == "image/png"||file.mimetype == "image/gif" ) {
                                 
        file.mv('public/images/upload_images/' + file.name, function(err) {
          if (err)
	         return res.status(500).send(err);
        //var sql = "INSERT INTO `users_image`(`first_name`,`last_name`,`mob_no`,`user_name`, `password` ,`image`) VALUES ('" + fname + "','" + lname + "','" + mob + "','" + name + "','" + pass + "','" + img_name + "')";
        var query = db.query(sql, function(err, result) {
          res.redirect('profile/'+result.insertId);
        });
      });
      } else {
        message = "This format is not allowed , please upload file with '.png','.gif','.jpg'";
        res.render('index.ejs',{message: message});
      }
    } else {
      res.render('index');
    }

    connection.query(userTable, function (error, results, fields) {
      if (error) throw error;
        res.send(results)
    });

    connection.end();
});

app.post('/users', function (req, res) {
  let user = req.body;
  var sql = "SET @name = ?; SET @username = ?; SET @emailAddress = ?; SET @homeHelperName = ?; SET @workHelperName = ?; SET @status = uninitiated; \
  CALL userAddorEdit(@name, @username, @emailAddress, @homeHelperName, @workHelperName, @status);";
  mysqlConnection.query(sql, [user.name, user.username, user.emailAddress, user.homeHelperName, user.workHelperName, user.status], (err, rows, fields) => {
    if (!err) 
    rows.forEach(element => {
      if(element.constructor == Array)
      res.send("Inserted user" + element[0].username);
    });
    else
    console.log(err); 
  })
});

// Start the server
app.listen(3000, () => {
 console.log('Go to http://localhost:3000/posts to see posts');
});