const nodemailer = require("nodemailer");


const envoiMail = (mail, token) =>{
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'penuel225@gmail.com',
          pass: 'essoh1235'
        }
      });

      let lien = `http://localhost:7000/connexion/${token}`
    
      const mailOptions = {
        from: 'penuel225@gmail.com',
        to: mail,
        subject: "Salut c'est penuel jutilise mailer sur Node.js",
        text: 'That was easy!',
        html: `<b>Hello world? </b> 
                <a href="${lien}"> Confirmer votre inscription</a>
            `
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
      
}

  

  module.exports = envoiMail;