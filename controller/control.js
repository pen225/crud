const {request, response} = require('express');
const userQuery = require('../queryFloder/query');
const {validationResult } = require('express-validator');

const userController = class{

    static afficheConnexion = (req = request, res = response) =>{
        res.render('../views/connexion');
    }

    static afficheCreateCompte = (req = request, res = response) =>{
        res.render('../views/creatCompte', {err: null});
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
            userQuery.insertDonnees(req.body)
            .then(success =>{
                console.log(success);
                res.redirect('/');
            })
            .catch(error=>{
                res.render('../views/creatCompte', {err: error});
                console.log(error);
            })
        }
        
        // userQuery.insertDonnees(req.body);
        // res.redirect('/creatCompte');
    }

    static connexion = (req = request, res = response) =>{
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            const err = errors.mapped();
            res.render('../views/connexion', {err: err});
            console.log(err);
        }else{

            userQuery.connexion(req.body)
            .then(success =>{
                console.log(success);
                res.send('connexion reussie')
                // res.redirect('/');
            })
            .catch(error=>{
                res.render('../views/connexion', {error: "error"});
                console.log(error);
                // res.send('connexion echouee')
            })
        }
    }

}

module.exports = userController;