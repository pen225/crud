const express = require('express');
const userController = require('../controller/control');
const userQuery = require('../queryFloder/query');
const { check, validationResult } = require('express-validator');
const { validator, result } = require('../middleware/validator');

const router = express.Router();


// Mes differentes routes
router.get('/', userController.afficheCreateCompte); 

router.post('/',validator,result,userController.insert);


module.exports = router;