const bcrypt= require("bcryptjs");
const jwt = require("jsonwebtoken");

const {User} = require('../../mod/user');

const {SECRET_KEY} = process.env;

const login = async(req, res) => {
    const {email, password, subscription} = req.body;
    const user = await User.findOne({email});
    if(!user) {
        const error = new Error(`Email or password is wrong`)
        error.status = 401;
        throw error;
    }
    const passwordHashCompare = await bcrypt.compare(password, user.password);
    if (!passwordHashCompare) {
        const error = new Error(`Email or password is wrong`)
        error.status = 401;
        throw error;
    }
    const payload = {
        id: user._id,
    }
    const token = jwt.sign(payload, SECRET_KEY, {expiresIn: "24h"});
    await User.findByIdAndUpdate(user._id, {token})
    res.json({
        state: "success",
        code: 200,
        responseBody: {
            token,
            user: {
               email, 
               subscription
            }
        }
    });
};

module.exports = login;