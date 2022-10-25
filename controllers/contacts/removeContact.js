const {Contact} = require('../../mod');

const removeContact = async(req, res) => {
    const {id} = req.params;
    const contactRemove = await Contact.findByIdAndRemove(id);
    if(!contactRemove) {
      const error = new Error(`Not found`)
      error.status = 404;
      throw error;
    }
    res.json({
      status: "success",
      code: 200,
      message: "contact deleted"
    });
};

module.exports = removeContact;