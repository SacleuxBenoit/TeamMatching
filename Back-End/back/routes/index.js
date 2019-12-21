// Imports

const express = require('express');
const usersController = require('../controllers/users');

// Router

exports.router = (function () {
    const router = express.Router();

    router.route('/users/register').post(usersController.register);
    router.route('/users/login/').post(usersController.login);
})