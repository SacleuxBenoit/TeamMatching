// Imports
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


module.exports = {

    register(req, res) {
        const pseudo = req.body.pseudo;
        const email = req.body.email;
        const mdp = req.body.mdp;
        const guilde = req.body.guilde;
        const discordpv = req.body.discordpv;
        const discordgu = req.body.discordgu;
        const description = req.body.description;

        if (pseudo == null || email == null || mdp == null || discordpv == null || discordgu == null || description == null) {
            return res.status(400).json({ 'error': 'missing parameters' });
        }
    },

    login(req, res) {

    }

}