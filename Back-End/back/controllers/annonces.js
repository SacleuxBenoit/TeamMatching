// Imports
const bcrypt = require('bcrypt');
const jwtUtils = require('../utils/jwt.utils');
const asyncLib = require('async');
const models = require('../models');

//Constants
const TITLE_LIMIT = 2;
const CONTENT_LIMIT = 4;
const ITEMS_LIMIT = 50;

module.exports = {
    createAnnonce: function (req, res) {
        // Getting auth header
        const headerAuth = req.headers['authorization'];
        const userId = jwtUtils.getUserId(headerAuth);

        // Params
        const title = req.body.title;
        const content = req.body.content;

        if (title == null || content == null) {
            return res.status(400).json({ 'error': 'missing parameters' });
        }

        if (title.length <= TITLE_LIMIT || content.length <= CONTENT_LIMIT) {
            return res.status(400).json({ 'error': 'invalid parameters' });
        }

        asyncLib.waterfall([
            function (done) {
                models.User.findOne({
                    where: { id: userId }
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
                    models.Annonce.create({
                        title: title,
                        content: content,
                        userId: userFound.id
                    })
                        .then(function (newAnnonce) {
                            done(newAnnonce);
                        });
                } else {
                    res.status(404).json({ 'error': 'user not found' });
                }
            },
        ], function (newAnnonce) {
            if (newAnnonce) {
                return res.status(201).json(newAnnonce);
            } else {
                return res.status(500).json({ 'error': 'cannot post message' });
            }
        });
    },
    listAnnonces: function(req, res){
        const fields = req.query.fields;
        const limit = parseInt(req.query.limit);
        const offset = parseInt(req.query.offset);
        const order = req.query.order;

        if (limit > ITEMS_LIMIT) {
            limit = ITEMS_LIMIT;
          }
          models.Annonce.findAll({
            order: [(order != null) ? order.split(':') : ['title', 'ASC']],
            attributes: (fields !== '*' && fields != null) ? fields.split(',') : null,
            limit: (!isNaN(limit)) ? limit : null,
            offset: (!isNaN(offset)) ? offset : null,
            include: [{
              model: models.User,
              attributes: ['pseudo']
            }]
          }).then(function(annonces) {
            if (annonces) {
              res.status(200).json(annonces);
            } else {
              res.status(404).json({ "error": "no Messages found" });
            }
          }).catch(function(err) {
            console.log(err);
            res.status(500).json({ "error": "invalid fields" });
          });
    }
}