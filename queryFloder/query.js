const dbConnect = require('../database');

const userQuery = class{
    static insertDonnees = (data) =>{
        let {nom, prenom, email, password} = data;
        let sql = "insert into users (nom, prenom, email, password) values(?, ?, ?, ?)";

        dbConnect.query(sql, [nom, prenom, email, password], (err, res) =>{
            if (!err) {
                console.log("success",res);
            }else{
                console.log("erreur d'insersion");
            }
        });
    }

    
}

module.exports = userQuery;