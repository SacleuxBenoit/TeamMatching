// Imports
const bcrypt = require('bcrypt');
const jwtUtils = require('../utils/jwt.utils');
const models = require('../models');


module.exports = {

    register(req, res) {
        const pseudo = req.body.pseudo;
        const email = req.body.email;
        const mdp = req.body.mdp;
        const guilde = req.body.guilde;
        const discordpv = req.body.discordpv;
        const discordgu = req.body.discordgu;
        const description = req.body.description;

        if (pseudo == null || email == null || mdp == null || discordpv == null || discordgu == null || guilde == null) {
            return res.status(400).json({ 'error': 'missing parameters' });
        }

        models.user.findOne({
            attributes: ['email'],
            where: { email: email }
        })
            .then(function (userFound) {
                if (!userFound) {
                    bcrypt.hash(password, 5, function (err, bcryptedPassword) {
                        const newUser = models.user.create({
                            email: email,
                            pseudo: pseudo,
                            mdp: bcryptedPassword,
                            discordpv: discordpv,
                            discordgu: discordgu,
                            description: description,
                            guilde: 0,
                        })
                            .then(function (newUser) {
                                return res.status(201).json({
                                    'userId': newUser.id
                                })
                            })
                            .catch(function (err) {
                                return res.status(500).json({ 'error': 'cannot add user' });
                            });
                    });
                } else {
                    return res.status(409).json({ 'error': 'user already exist' });
                }
            })
            .catch(function (err) {
                return res.status(500).json({ 'error': 'unable to verify user' });
            });
    },


    login(req, res) {
        const pseudo = req.body.pseudo;
        const mdp = req.body.mdp;

        if (pseudo == null || mdp == null) {
            return res.status(400).json({ 'error': 'missing parameters' });
        }

        models.user.findOne({
            where: { pseudo: pseudo }
        })

            .then(function (userFound) {
                if (userFound) {
                    bcrypt.compare(mdp, userFound.mdp, function (errBycrypt, resBycrypt) {
                        if (resBycrypt) {
                            return res.status(200).json({
                                'userId': userFound.id,
                                'token': jwtUtils.generateTokenForUser(userFound)
                            });
                        }
                        else {
                            return res.status(403).json({ "error": "invalid password" });
                        }
                    }
                    );
                } else {
                    return res.status(404).json({
                        'error': 'user not exist in DB'
                    }
                    );
                }
            }
            )
            .catch(function (err) {
                return res.status(500).json({ 'error': 'unable to verify user' });
            })

    }
}