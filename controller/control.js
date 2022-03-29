const {request, response} = require('express');
const userQuery = require('../queryFloder/query');
const {validationResult } = require('express-validator');
const bcryptjs = require('bcryptjs');

const userController = class{

    static afficheDashboard = (req = request, res = response) =>{
        res.render('dashboard');
    }


    static afficheConnexion = (req = request, res = response) =>{
        res.render('../views/connexion');
    }

    static afficheCreateCompte = (req = request, res = response) =>{
        res.render('../views/creatCompte', {err:{}});
    }

    static insert = async (req = request, res = response) =>{

        const errors = validationResult(req);
            if (!errors.isEmpty()) {
                const err = errors.mapped();
                res.render('../views/creatCompte', {err: err});
                console.log(err);
                // return res.status(422).jsonp(errors.array());
            }else{
                let passwordhash = await bcryptjs.hash(req.body.password, 8)
                console.log('passwordHash est :', passwordhash)
                let users={       
                    "nom":req.body.nom,       
                    "prenom":req.body.prenom,       
                    "email":req.body.email,
                    "password":passwordhash,
                }     
                console.log(users)
                userQuery.insertDonnees(users)
                .then(success =>{
                    console.log("pen",req.body);
                    res.redirect('/');
                })
                .catch(error =>{
                    res.render('creatCompte',{err:error})
                    console.log(error);
                })
                
            }
    }

    static connexion = (req = request, res = response) =>{
        // res.render('../views/creatCompte', {err:{}});
        // console.log(req.body);
        userQuery.connexion(req.body)
        .then(success=>{
            console.log('success connect', success[0].email);
            res.redirect('/');
        })
        .catch(error =>{
            res.render('connexion', {err:"Email ou mot de passe incorrect"})
            console.log("erreur d'authentification", error);
        })
        
        
    }
}

module.exports = userController;