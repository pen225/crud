const dbConnect = require('../database');

const userQuery = class{
    static insertDonnees = (data) =>{
        return new Promise((resolve, reject) =>{
            let {nom, prenom, email, password} = data;
            let sql = "insert into users (nom, prenom, email, password) values(?, ?, ?, ?)";
            let verif = "select * from user where email = ?";

        dbConnect.query(verif, [email], (erreur, resultat) =>{
            if (resultat) {
                dbConnect.query(sql, [nom, prenom, email, password], (err, res) =>{
                    if (erreur) {
                        reject(err);
                        // console.log("erreur d'insersion");
                        
                    }else{
                        resolve(res);
                        // console.log("success",res);
                    }
                });
                
            }else{
                reject({message: "email exist"})
            }
        })

       
        })
        
    }

    static connexion = (data) =>{
        let {email, password} = data;
        let sql = "select * from users where email = ? and password =?";

        dbConnect.query(sql, [email, password], (err, res) =>{
            if (!err) {
                console.log("success",res);
            }else{
                console.log("erreur de conexion");
            }
        });
    }

    
}

module.exports = userQuery;