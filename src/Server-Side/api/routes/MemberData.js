const express = require('express');
const router = express.Router();

const User = require('../../Database/models/UserModel') 

/**
 * @route   POST /user
 * @desc    Get User Data 
 * @access  Public
 */

router.get('/', (req, res) => {

  const { emailAddress } = req.body

    User.findOne( {emailAddress} )
      .then(user => res.json(user));
     
  });

module.exports = router
