const express = require("express");

const {validation, authenticate, download} = require("../../middlewares")
const {ctrlMiddleware} = require("../../middlewares");
const {schema} = require("../../mod/user");
const ctrl = require("../../controllers/auth")


const router = express.Router();

//users/signup
router.post('/signup', validation(schema.signupShema), ctrlMiddleware(ctrl.signup));

//login
router.post('/login', validation(schema.loginShema), ctrlMiddleware(ctrl.login));

//current
router.get('/current', authenticate, ctrlMiddleware(ctrl.getCurrent));

//logout
router.get('/logout', authenticate, ctrlMiddleware(ctrl.logout));

//avatars
router.patch('/avatars', authenticate, download.single("avatar"), ctrlMiddleware(ctrl.newAvatar));

//verify
router.get('/verify/:verificationToken', ctrlMiddleware(ctrl.verify));
router.post('/verify', validation(schema.verifyEmail), ctrlMiddleware(ctrl.resetEmail));


module.exports = router;

