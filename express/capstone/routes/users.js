const express = require('express'),
bcrypt = require('bcryptjs'),
UserModel = require('../models/userModel'),
router = express.Router();



router.post('/signup', function(req, res, next) {
const { first_name, last_name, password, email } = req.body;

const salt = bcrypt.genSaltSync(10);
const hash = bcrypt.hashSync(password, salt);

const user = new UserModel(null, first_name, last_name, email, hash);
user.addUser();

res.redirect('/');
});

module.exports = router;