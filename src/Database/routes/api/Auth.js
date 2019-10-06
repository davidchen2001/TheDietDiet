const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken');
const auth = require('../../middleware/auth')

const User = require('../../models/UserModel') //For now just have user sign up and authentication 
//const Member = require('../Database/models/Member');
//const Helper = require('../Database/models/Helper');
/*
router.all('/', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next()
});*/

router.post('/', (req, res) => {
  //const { username, emailAddress, password} = req.body;
  const { emailAddress, password} = req.body;
  // Simple validation
  /*
  if( (String(username) === 0 || String(password) === 0) || (String((emailAddress) === 0 || String(password) === 0)) ) {
    return res.status(400).json({ msg: 'Please enter all fields' });
   }*/
   if( (String(emailAddress) === 0 || String(password) === 0) ) {
    return res.status(400).json({ msg: 'Please enter all fields' });
   }

   User.findOne({ emailAddress })
   .then(user => {
       if(!user) return res.status(400).json({ msg: 'User does not exist' });
       
       /*
       if (!isHelper) {
           const newUser = new Member({name, username, emailAddress, password});
       } else {
           const newUser = new Helper({name, username, emailAddress, password});  
       }*/

       //const newUser = new User({name, username, emailAddress, password});

      //Validating password
      bcrypt.compare(password, user.password)
      .then(isMatch => {
        if(!isMatch) return res.status(400).json({ msg: 'Invalid credentials' });

        jwt.sign(
          { id: user.id },
          config.get('jwtSecret'),
          { expiresIn: 3600 },
          (err, token) => {
            if(err) throw err;
            res.json({
              token,
              user: {
                id: user.id,
                name: user.name,
                username: user.username,
                emailAddress: user.emailAddress
              }
            });
          }
        )
      })
      
    })
});

router.get('/User', auth, (req, res) => {
    User.findById(req.user.id)
      .select('-password')
      .then(user => res.json(user));
  });

module.exports = router;