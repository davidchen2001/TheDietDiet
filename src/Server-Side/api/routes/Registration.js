const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken');

//For now just have user sign up and authentication, implement Member and Helper later 
const User = require('../../Database/models/UserModel') 
//const Member = require('../Database/models/Member');
//const Helper = require('../Database/models/Helper');

/**
 * @route   POST /registration
 * @desc    Register user
 * @access  Public
 */


router.post('/', (req, res) => {
  const { name, username, emailAddress, password, isHelper } = req.body;

  // Simple validation
  if (String(name).length === 0 || String(username).length === 0 || String(emailAddress).length === 0 || String(password).length === 0) { //|| !username || !emailAddress || !password
    return res.status(400).json({ msg: 'Please enter all fields' });
   }

   User.findOne({ emailAddress })
   .then(user => {
       if(user)
       {
        return res.status(400).json({ msg: 'User already exists' });
       }
       
       /*
       if (!isHelper) {
           const newUser = new Member({name, username, emailAddress, password});
       } else {
           const newUser = new Helper({name, username, emailAddress, password});  
       }*/

       const newUser = new User({name, username, emailAddress, password, isHelper});

      // Create salt & hash
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if(err) throw err;
          newUser.password = hash;
          newUser.save()
            .then(user => {
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
                      emailAddress: user.emailAddress,
                      isHelper: user.isHelper
                    }
                  });
                }
              )
            });
        })
      })

    })
});

module.exports = router;