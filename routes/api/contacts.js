const express = require('express')

const router = express.Router()
const Joi = require('joi');
const {validation, authenticate} = require("../../middlewares")
const {ctrlMiddleware} = require("../../middlewares");
const {contacts : ctrl} = require('../../controllers');

const contactScheme = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  phone: Joi.string().required(),
  favorite: Joi.bool(),
});

const favoriteJoiSchema = Joi.object({
  favorite: Joi.bool().valid(true, false),
});

router.get('/', authenticate, ctrlMiddleware(ctrl.listContacts));
router.get('/:id', authenticate, ctrlMiddleware(ctrl.getContactById));
router.post('/', authenticate, validation(contactScheme), ctrlMiddleware(ctrl.addContact));
router.put('/:id', authenticate, validation(contactScheme), ctrlMiddleware(ctrl.updateContact));
router.delete('/:id', authenticate, ctrlMiddleware(ctrl.removeContact));
router.patch('/:id/favorite', authenticate, validation(favoriteJoiSchema), ctrlMiddleware(ctrl.favoriteContact));




module.exports = router
