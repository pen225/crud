const {request, response} = require('express');
const userQuery = require('../queryFloder/query');
const {validationResult } = require('express-validator');
const bcryptjs = require('bcryptjs');
const bcrypt = require('bcryptjs/dist/bcrypt');
const jwt = require('jsonwebtoken')
// const {promisify} = require('util');
const userToken = require('../middleware/token');
const envoiMail = require('../middleware/nodemailer');



const userController = class{

    static afficheDashboard = (req = request, res = response) =>{
        res.render('dashboard');
        // , {message: 'Bienvenue, ' + req.session.email}
    }
    static logoutDashboard = (req = request, res = response) =>{
        // if (req.session.email) {
        //     req.session.destroy();
        // }
        res.redirect('/');
        // res.render('dashboard', {message: 'Bienvenue, ' + req.session.email});
    }


    static afficheConnexion = (req = request, res = response) =>{
        // if (req.session.user) {
        //     return res.redirect('/')
        // }
        res.render('connexion', {err: ""});
    }

    static afficheCreateCompte = (req = request, res = response) =>{
        res.render('../views/creatCompte',{err:{}} );
    }

    static insert = async (req = request, res = response) =>{

        const errors = validationResult(req);
            if (!errors.isEmpty()) {
                const err = errors.mapped();
                res.render('../views/creatCompte', {err: err});
                console.log(err);
                // return res.status(422).jsonp(errors.array());
            }else{
                
                let token = userToken.creatToken(req.body);
                envoiMail(req.body.email, token)

                // verifToken(token)
                // userQuery.insertDonnees(req.body)
                // .then(success =>{
                //     console.log("pen",req.body);
                //     res.redirect('/connexion');
                // })
                // .catch(error =>{
                //     res.render('creatCompte',{err:error})
                //     console.log(error);
                // })
                
            }
    }

    static connexion = (req = request, res = response) =>{
        userQuery.connexion(req.body)
        .then(success=>{

            const passconnect = req.body.password;
            const email = req.body.email;
            const compare = bcrypt.compareSync(passconnect, success[0].password);
            console.log("resultat de comparaison",compare);
            if (compare) {
                res.redirect('/');
            }else{
                res.render('connexion', {err:"Email ou mot de passe incorrect"})
            }
             const id = success[0].id;
            //  const token = jwt.sign({id: id}, )
            // let session = {
            //     email: req.body.email,
            //     password: req.body.password
            // }
            // req.session.user = session;
            // console.log('success connect', success[0].email);
            // console.log("session", req.session.user);

        })
        .catch(error =>{
            console.log(error);
        })
        
        
    }
}

module.exports = userController;