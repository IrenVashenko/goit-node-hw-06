const {Contact} = require('../../mod');

const favoriteContact = async(req, res) => {
    const {id} = req.params;
    const {favorite} = req.body;
    const contact = await Contact.findByIdAndUpdate(id, {favorite}, {new:true});
    console.log(contact)
   if(!contact){
      const error = new Error("Not found");
      error.status = 404;
      throw error;
    }
    res.json({
      status: "success",
      code: 200,
      data: {
        contact
      }
    })
};

module.exports = favoriteContact;