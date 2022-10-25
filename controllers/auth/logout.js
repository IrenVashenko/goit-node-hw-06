const {User} = require("../../mod/user");


const logout = async(req, res) => {
    const {id} = req.user;
    const user = await User.findByIdAndUpdate(id, {token: ""});
    if (!user) {
        const error = new Error(`Not authorized`)
        error.status = 401;
        throw error;
    }
    res.json({
        state: "success",
        code: 204
    })
};

module.exports = logout;