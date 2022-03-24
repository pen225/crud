const dbConnect = require('../database');

const userQuery = class{
    static insertDonnees = (data) =>{
        let {nom, prenom, email, password} = data;
        let sql = "insert into users (nom, prenom, email, password) values(?, ?, ?, ?)";
        let verif = "select * from users where email = ?";

        return new Promise((resolve, reject) =>{
            dbConnect.query(verif,[email], (error, resultats) =>{
                if (resultats == '') {
                    console.log(resultats);
                    console.log("inscrivez vous");
                    dbConnect.query(sql, [nom, prenom, email, password], (error, resultat) =>{
                        if (error) {
                            reject(error);
                            console.log("erreur d'insersion");
                            
                        }else{
                            resolve(resultat);
                            console.log("success",resultat);
                        }
                    });
                }else{
                    reject({message: "email exist"})
                    console.log("email exist");
                }
            })
        })
        
    }

    static connexion = (data) =>{
        return new Promise((resolve,reject) =>{
            let {email, password} = data;
            let sql = "select * from users where email = ? and password =?";
            dbConnect.query(sql, [email, password], (err, resultat) =>{
                if (resultat == '') {
                    // reject(err);
                    reject({message: "erreur de conexion"})
                    console.log("erreur de conexion");
                }else{
                    
                    console.log("success connexion",resultat);
                    resolve(resultat);
                }
            });
        })
        
    }

    
}

module.exports = userQuery;