const dbConnect = require('../database');
const bcrypt = require('bcryptjs');

const userQuery = class{
    static insertDonnees = (data) =>{
        let {nom, prenom, email, password} = data.success;
        let sql = "insert into users (nom, prenom, email, password) values(?, ?, ?, ?)";
                console.log("query data", data);   
        const hashpassword = bcrypt.hashSync(password, 8);
        dbConnect.query(sql, [nom, prenom, email, hashpassword], (error, result) =>{
            if (error) {
                return error;
            }else{
                console.log("success",result);
                return result;
            }
        });
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