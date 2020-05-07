const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken');
const auth = require('../../Database/middleware/auth')

const User = require('../../Database/models/UserModel') //For now just have user sign up and authentication 

router.get('/member', auth, (req, res) => {
    User.findById(req.user.id)
      .then(user => res.json(user));
  });

module.exports = router
