const { check, validationResult } = require('express-validator');


const validator = [
    check('nom', 'Le nom doit contenir 3 caracteres au minimum')
    .exists()
    .isLength({ min: 3 })
]

const result = (req, res, next) =>{
    const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).jsonp(errors.array());
        }else{
            // userQuery.insertDonnees(req.body);
            // res.redirect('/creatCompte');
        }
        next();
}

module.exports = {
    validator,
    result
}