const {User} = require('../../mod/user');

const {sendEmail} = require("../../help");

const resetEmail = async() => {
    const {email} = req.body;
    const user = await User.findOne({email});
    if(!user) {
        const error = new Error(`{email} in use`)
        error.status = 404;
        throw error;
    }
    const mail = {
        to: email,
        subject: "Verify email",
        html:`<a target="_blank" href="${BASE_URL}/api/auth/verify/${user.verificationToken}">Click to email</a>`
    }

    await sendEmail(mail);

    resetEmail.json({
        message: "Success to send"
    })
};

module.exports = resetEmail;