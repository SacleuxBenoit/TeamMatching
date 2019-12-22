// Imports
const bcrypt = require('bcrypt');
const jwtUtils = require('../utils/jwt.utils');
const models = require('../models');

module.exports = {

    game(req, res) {
        const title = req.body.title;
        const content = req.body.content;
        const pj = req.body.pj;
        const gw2 = req.body.gw2;
        const albion = req.body.albion
        const lol = req.body.lol;
        const overwatch = req.body.overwatch;
        const tm2 = req.body.tm2;

        if (title == null || content == null) {
            return res.status(400).json({ 'error': 'missing parameters' });
        }

    }
}