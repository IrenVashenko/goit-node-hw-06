const {Contact} = require("../../mod");

const getContactById = async(req, res) => {
    const {id} = req.params;
    const contactById = await Contact.findById(id);
    if(!contactById) {
      const error = new Error(`Not found the contact id=${id}`)
      error.status = 404;
      throw error;
    }
    res.json({
      state: "success",
      code: 200,
      date: {
        result: contactById
      }
    })
}

module.exports = getContactById;