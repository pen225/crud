const {request, response} = require('express');
const userQuery = require('../queryFloder/query');
const {validationResult } = require('express-validator');

const userController = class{

    static afficheConnexion = (req = request, res = response) =>{
        res.render('../views/connexion');
    }

    static afficheCreateCompte = (req = request, res = response) =>{
        res.render('../views/creatCompte', {err:{}});
    }

    static insert = (req = request, res = response) =>{
        console.log(req.body);
        const errors = validationResult(req);
            
        if (!errors.isEmpty()) {
            const err = errors.mapped();
            res.render('../views/creatCompte', {err: err});
            console.log(err);
            // return res.status(422).jsonp(errors.array());
        }else{
            // userQuery.insertDonnees(req.body);
            res.redirect('/');
        }
        
        // userQuery.insertDonnees(req.body);
        // res.redirect('/creatCompte');
    }

    static connexion = (req = request, res = response) =>{
        // res.render('../views/creatCompte', {err:{}});
        res.send('Connexion réussie');
        // console.log(req.body);
        userQuery.connexion(req.body)
    }
}

module.exports = userController;