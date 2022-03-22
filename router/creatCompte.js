const express = require('express');
const userController = require('../controller/control');
const userQuery = require('../queryFloder/query');
const router = express.Router();


// Mes differentes routes
router.get('/', userController.afficheCreateCompte); 
router.post('/',[], userController.insert);


module.exports = router;