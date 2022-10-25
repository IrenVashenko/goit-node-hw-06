const {Contact} = require("../../mod");

const updateContact = async(req, res) => {
    const { id } = req.params;
    const updateID = await Contact.findByIdAndUpdate(id, req.body, {new:true});
    if(!updateID){
      const error = new Error({"message": "Not found"});
      error.status = 404;
      throw error;
    }
    res.json({
      status: "success",
      code: 200,
      data: {
        updateID
      }
    })
};

module.exports = updateContact;
