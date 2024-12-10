const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();

app.use(cors())
app.use(express.json());


const sendMail = require('./controller/mailer');

app.post('/sendEmail', async (req, res) => {
    try {
    const { to, subject, content } = req.body;
    if (!to || !subject || !content) {
        return res.status(400).json({error: "Missing email, subject, or content"});
    }
        await sendMail(to, subject, content);
        res.status(200).json({message: "Email sent successfully"});
    } catch (error) {

        res.status(500).send({error: "Failed to send email"});
    }
});


app.listen(5000, function () {
    console.log("Server is running on port 5000");
});
