var express = require('express');
var router = express.Router();
// const Apps = require('../models/apps.js');
// const AddUser = require('../models/addUser.js');
// const Users = require('../models/users.js');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.send('Welcome to API').status(200);
});

/* Shows all users (will be only visible to admin) */
router.get('/users', async function (req, res, next) {
  const all = await Users.getAllUsers();
  res.json(all);
});

/* Shows all public applications */
router.get('/apps', async function (req, res, next) {
  const all = await Apps.getAllApplications();
  res.json(all);
});

/* Adds new user */
router.post('/adduser', async (req, res) => {
  const {
    first_name,
    last_name,
    email,
    user_password,
    is_admin,
    contact_me,
  } = req.body;
  const response = await AddUser.addUser(
    first_name,
    last_name,
    email,
    user_password,
    is_admin,
    contact_me
  );

  if (response.command === 'INSERT' && response.rowCount >= 1) {
    res.sendStatus(200);
  } else {
    res.send('Could not add new user').status(409);
  }
  res.sendStatus(200);
});

module.exports = router;
