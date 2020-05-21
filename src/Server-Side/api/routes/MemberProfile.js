const express = require('express');
const router = express.Router();
const auth = require('../../Database/middleware/auth')

const User = require('../../Database/models/UserModel')

/**
 * @route   POST /user
 * @desc    Get user data 
 * @access  Private 
 */

router.get('/', auth, (req, res) => {
    User.findById(req.user.id)
      .select('-password')
      .then(user => res.json(user));
  });

module.exports = router 