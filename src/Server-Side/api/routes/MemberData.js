const express = require('express');
const router = express.Router();

const User = require('../../Database/models/UserModel') //For now just have user sign up and authentication 

router.get('/', (req, res) => {

  const { emailAddress } = req.body

    User.findOne( {emailAddress} )
      .then(user => res.json(user));
    return 0 
  });

module.exports = router
