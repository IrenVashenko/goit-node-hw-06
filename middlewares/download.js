const multer = require("multer");
const path = require("path");

const direFile = path.join(__dirname, "../", "temp");

const multerConfig = multer.diskStorage({
    destination: direFile,
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
});

const download = multer({
    storage: multerConfig,
});

module.exports = download;