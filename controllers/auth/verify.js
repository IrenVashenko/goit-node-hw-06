const {User} = require('../../mod/user');

const verify = async(req, res)=> {
    const {verificationToken} = req.params;
    const user = await User.findOne({verificationToken});
    if(!user){
        const error = new Error(`{email} in use`)
        error.status = 404;
        throw error;
    }
    await User.findByIdAndUpdate(user._id, {verify: true, verificationToken: ""});

    res.json({
        message: "Email verify success"
    })
}

module.exports = verify;