const nodemailer = require("nodemailer");
require("dotenv").config();

const {META_PASSWORD} = process.env;

const nodemailerConfig = {
    host: "smtp.meta.ua",
    port: 465, 
    secure: true,
    auth: {
        user: "vashenko1607@meta.ua",
        pass: META_PASSWORD
    }
};

const transporter = nodemailer.createTransport(nodemailerConfig);

const sendEmail = async(data) => {
    console.log(data)
    const mail = {...data, from:"vashenko1607@meta.ua"}
    await transporter.sendMail(mail);
    return true
};

module.exports = sendEmail;