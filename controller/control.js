const {request, response} = require('express');
const userQuery = require('../queryFloder/query');

const userController = class{

    static afficheConnexion = (req = request, res = response) =>{
        res.render('../views/connexion');
    }

    static afficheCreateCompte = (req = request, res = response) =>{
        res.render('../views/creatCompte');
    }

    static insert = (req = request, res = response) =>{
        console.log(req.body);
        userQuery.insertDonnees(req.body);
        res.redirect('/creatCompte');
    }
}

module.exports = userController;