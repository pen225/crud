const express = require('express');
const userController = require('../controller/control');
const router = express.Router();


router.get('/', userController.afficheConnexion);


module.exports = router;