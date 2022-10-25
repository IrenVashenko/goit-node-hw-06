const listContacts = require("./listenContacts");
const getContactById = require("./getContactById");
const addContact = require("./addContact");
const updateContact = require("./updateContact");
const removeContact = require("./removeContact");
const favoriteContact = require("./favoriteContact");

module.exports = {
    listContacts,
    getContactById,
    addContact,
    updateContact,
    removeContact,
    favoriteContact
}