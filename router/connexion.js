const express = require('express');
const userController = require('../controller/control');
const router = express.Router();
const { validator, result } = require('../middleware/validator');


router.get('/', userController.afficheConnexion);
router.get('/:id', userController.afficheConnexionToken);
router.post('/', validator, userController.connexion);


module.exports = router;