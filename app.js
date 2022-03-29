const express = require('express');
const dbConnect = require('./database');
const connexion = require('./router/connexion');
const creatCompte = require('./router/creatCompte');
const dashboard = require('./router/dashboard');
const app = express();

app.set('views', './views');
app.set('view engine', 'ejs');
app.use('/public', express.static('public'));

dbConnect.connect((err) =>{
    if (!err) {
        console.log("connexion réussie");
        app.use(express.json());
        app.use(express.urlencoded({ extended: true }));
        
        app.use('/', dashboard);
        app.use('/connexion', connexion);
        app.use('/creatCompte', creatCompte);
    } else{
        console.log("erreur", err);
    }
});






app.listen(7000, () =>{
    console.log('listening on port 7000');
});