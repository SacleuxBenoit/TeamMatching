// Imports
const bcrypt = require('bcrypt');
const jwtUtils = require('../utils/jwt.utils');
const asyncLib = require('async');
const models = require('../models');


//Constants
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

        asyncLib.waterfall([
            function (done) {
                models.User.findOne({
                    attributes: ['email'],
                    where: { email: email }
                })
                    .then(function (userFound) {
                        done(null, userFound);
                    })
                    .catch(function (err) {
                        return res.status(500).json({ 'error': 'unable to verify user' });
                    });
            },
            function (userFound, done) {
                if (!userFound) {
                    bcrypt.hash(mdp, 5, function (err, bcryptedmdp) {
                        done(null, userFound, bcryptedmdp);
                    });
                } else {
                    return res.status(409).json({ 'error': 'user already exist' });
                }
            },
            function (userFound, bcryptedmdp, done) {
                var newUser = models.User.create({
                    email: email,
                    pseudo: pseudo,
                    mdp: bcryptedmdp,
                    guilde: guilde,
                    discordpv: discordpv,
                    discordgu: discordgu,
                    description: description
                })
                    .then(function (newUser) {
                        done(newUser);
                    })
                    .catch(function (err) {
                        return res.status(500).json({ 'error': 'cannot add user' });
                    });
            }
        ], function (newUser) {
            if (newUser) {
                return res.status(201).json({
                    'userId': newUser.id
                });
            } else {
                return res.status(500).json({ 'error': 'cannot add user' });
            }
        });
    },

    login(req, res) {
        const pseudo = req.body.pseudo;
        const mdp = req.body.mdp;

        if (pseudo == null || mdp == null) {
            return res.status(400).json({ 'error': 'missing parameters' });
        }

        asyncLib.waterfall([
            function (done) {
                models.User.findOne({
                    where: { pseudo: pseudo }
                })
                    .then(function (userFound) {
                        done(null, userFound);
                    })
                    .catch(function (err) {
                        return res.status(500).json({ 'error': 'unable to verify user' });
                    });
            },
            function (userFound, done) {
                if (userFound) {
                    bcrypt.compare(mdp, userFound.mdp, function (errBycrypt, resBycrypt) {
                        done(null, userFound, resBycrypt);
                    });
                } else {
                    return res.status(404).json({ 'error': 'user not exist in DB' });
                }
            },
            function (userFound, resBycrypt, done) {
                if (resBycrypt) {
                    done(userFound);
                } else {
                    return res.status(403).json({ 'error': 'invalid password' });
                }
            }
        ], function (userFound) {
            if (userFound) {
                return res.status(201).json({
                    'userId': userFound.id,
                    'token': jwtUtils.generateTokenForUser(userFound)
                });
            } else {
                return res.status(500).json({ 'error': 'cannot log on user' });
            }
        });
    },
    getUserProfile: function (req, res) {
        // Getting auth header
        const headerAuth = req.headers['authorization'];
        const userId = jwtUtils.getUserId(headerAuth);

        if (userId < 0) {
            return res.status(400).json({ 'error': 'wrong token' });
        }
        models.User.findOne({
            attributes: ['id', 'email', 'pseudo', 'guilde', 'discordpv', 'discorgu', 'description'],
            where: { id: userId }
        }).then(function (user) {
            if (user) {
                res.status(201).json(user);
            } else {
                res.status(404).json({ 'error': 'user not found' });
            }
        }).catch(function (err) {
            res.status(500).json({ 'error': 'cannot fetch user' });
        });
    },

}