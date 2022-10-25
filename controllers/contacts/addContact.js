const {Contact} = require("../../mod");

const addContact = async(req, res) => {
    const {favorite} = req.body;
    const {_id: owner} = req.user;
    const contacts = await Contact.create({...req.body, owner}); 
    res.status(201).json({
        status:"success",
        code: 201,
        data: {
            contacts
        }
    })
}

module.exports = addContact;
