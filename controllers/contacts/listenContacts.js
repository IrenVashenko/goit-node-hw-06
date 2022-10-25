const {Contact} = require("../../mod");

const listContacts = async(req, res) => {
    const contacts = await Contact.find({}, "-createdAt -updatedAt");
    res.json({
      status: "success",
      code: 200,
      date: {
        result: contacts
      }
    });
};

module.exports = listContacts;