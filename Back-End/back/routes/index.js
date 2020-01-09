// Imports

const express = require('express');
const usersController = require('../controllers/users');
const annonceController = require('../controllers/annonces');

// Router

exports.router = (function () {
    const router = express.Router();


    //Users routes    
    router.route('/users/register').post(usersController.register);
    router.route('/users/login/').post(usersController.login);
    router.route('/users/me/').get(usersController.getUserProfile);
    router.route('/users/me/').put(usersController.updateUserProfile);
    //router.route('/users/:id').delete(usersController.deleteUserProfile);

    //Annonces routes
    router.route('/annonces/new/').post(annonceController.createAnnonce);
    router.route('/annonces/').get(annonceController.listAnnonces);
    router.route('/annonces/').put(annonceController.updateAnnonce);
    //router.route('/annonces/:id').delete(annonceController.deleteAnnonce)

    return router;
})();