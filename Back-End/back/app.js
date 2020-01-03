//Imports
const express = require('express');
const bodyParser = require('body-parser');
const apiRouter = require('./routes/index').router;

// Instantiate the server
const router = express();

//Body Parser configuration
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

// Configure routes
router.get('/', function (req, res) {
    res.setHeader('Content-Type', 'text/html');
    res.status(200).send('<h1>Bienvenue sur notre serveur</h1>')
});

router.use('/api/', apiRouter);

//Launch server
router.listen(8080, function () {
    console.log('Server is listening !');
})

module.exports = router;