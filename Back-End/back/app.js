//Imports
const express = require('express');

// Instantiate the server
const router = express();

// Configure routes
router.get('/', function (req, res) {
    res.setHeader('Content-Type', 'text/html');
    res.status(200).send('<h1>Bienvenue sur notre serveur</h1>')
});

//Launch server
router.listen(8080, function () {
    console.log('Server is listening !');
})