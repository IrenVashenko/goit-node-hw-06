const bcrypt= require("bcryptjs");
const gravatar = require("gravatar");
const {nanoid} = require("nanoid");

const {User} = require('../../mod/user');

const {sendEmail} = require("../../help");

const{BASE_URL} = process.env;

const signup = async(req, res) => {
    const {name, email, password} = req.body;
    const user = await User.findOne({email});
    if(user) {
        const error = new Error(`${email} in use`)
        error.status = 409;
        throw error;
    }
    const hashPassword = await bcrypt.hash(password, 10);
    const avatarURL = gravatar.url(email);
    const verificationToken = nanoid();
    const result = await User.create({name, email, password: hashPassword, avatarURL, verificationToken});
    
    const mail = {
        to: email,
        subject: "Verify email",
        html:`<a target="_blank" href="${BASE_URL}/api/auth/verify/${verificationToken}">Click to email</a>`
    }

    await sendEmail(mail)
    // console.log(sendEmail(mail))
    res.status(201).json({
        name: result.name,
        email: result.email
    })
};

module.exports = signup;