// Imports
const bcrypt = require('bcrypt');
const jwtUtils = require('../utils/jwt.utils');
const models = require('../models');
const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const PASSWORD_REGEX = /^[a-zA-Z]\w{3,14}$/;

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
        if (pseudo.length >= 13 || pseudo.length <= 4) {
            return res.status(400).json({ 'error': 'wrong username (must be length 5 - 12)' });
        }
        if (!EMAIL_REGEX.test(email)) {
            return res.status(400).json({ 'error': 'email is not valid' });
        }
        if (!PASSWORD_REGEX.test(mdp)) {
            return res.status(400).json({ 'error': 'password is not valid' });
        }


        models.User.findOne({
            attributes: ['email'],
            where: { email: email }
        })
            .then(function (userFound) {
                if (!userFound) {
                    bcrypt.hash(mdp, 5, function (err, bcryptedmdp) {
                        const newUser = models.User.create({
                            email: email,
                            pseudo: pseudo,
                            mdp: bcryptedmdp,
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

        models.User.findOne({
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