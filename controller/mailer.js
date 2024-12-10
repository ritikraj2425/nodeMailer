const nodemailer = require("nodemailer");


let config = {
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.APP_PASSWORD
    }
};

let transporter = nodemailer.createTransport(config);


const sendMail = (to, subject, htmlContent) => {
    let message = {
        from: process.env.EMAIL,
        to: to,
        subject: subject,
        html: htmlContent
    };

    return transporter.sendMail(message)
        .then(() => {
            console.log("Email has been sent");
        })
        .catch(error => {
            console.error("Error sending email:", error);
        });
};

module.exports = sendMail;
