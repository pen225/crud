const dbConnect = require('../database');
const bcrypt = require('bcryptjs');

const userQuery = class{
    static insertDonnees = (data) =>{
        let {nom, prenom, email, password} = data;
        let sql = "insert into users (nom, prenom, email, password) values(?, ?, ?, ?)";
        let verif = "select * from users where email = ?";
        
        return new Promise((resolve, reject) =>{
            dbConnect.query(verif, [email], (error, resultat) =>{
                console.log('resultat', resultat);
                console.log('error', error);
            if (resultat == '') {
                
                const hashpassword = bcrypt.hashSync(password, 8);
                dbConnect.query(sql, [nom, prenom, email, hashpassword], (error, result) =>{
                    if (error) {
                        reject(error);
                        // console.log("erreur d'insersion");
                        
                    }else{
                        resolve(result);
                        console.log("success",result);
                    }
                });
                
            }else{
                reject({message: "email exist"})
            }
        })

       
        })
    }

    static connexion = (data) =>{
        return new Promise((resolve, reject) =>{
            let {email} = data;
            let sql = "select * from users where email = ?";
            dbConnect.query(sql, [email], (err, res) =>{
                if (res) {
                    console.log("success",res);
                    resolve(res)
                }else{
                    console.log("erreur de conexion");
                    reject(err)
                }
            });
        })

        
    }

    
}

module.exports = userQuery;