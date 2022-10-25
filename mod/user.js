const {Schema, model} = require("mongoose");
const Joi = require('joi');

const emailRegexp = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/

const userShame = new Schema({
    name: {
      type: String,
      required: [true, 'Set name for contact'],
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
    },
    subscription: {
        type: String,
        enum: ["starter", "pro", "business"],
        default: "starter"
    },
    token: {
        type: String,
        default: null,
    },
    avatarURL: {
        type: String,
        required: true
    }
});

const signupShema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().pattern(emailRegexp).required(),
    password:Joi.string().min(6).required() 
});

const loginShema = Joi.object({
    email: Joi.string().pattern(emailRegexp).required(),
    password:Joi.string().min(6).required() ,
    subscription:Joi.string().required()
})

const schema = {
    signupShema,
    loginShema 
}

const User = model("user", userShame);

module.exports = {
    User, 
    schema
}