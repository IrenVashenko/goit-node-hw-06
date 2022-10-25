const fs = require("fs/promises");
const path = require("path");

const {User} = require('../../mod/user');

const direFile = path.join(__dirname, "../../", "public", "avatars");
console.log(direFile)
const newAvatar = async(req, res) => {
    const {_id} = req.user;
    const {path: tempUpload, originalname} = req.file;
    const extention = originalname.split(".").pop();
    const filename = `${_id}.${extention}`;
    const resultUpload = path.join(direFile, filename);
    await fs.rename(tempUpload, resultUpload);
    const avatarURL = path.join("avatars", filename);
    await User.findByIdAndUpdate(_id, {direFile});

    res.json({
        avatarURL,
    });
}

module.exports = newAvatar;