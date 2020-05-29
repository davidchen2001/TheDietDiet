const express = require("express");
const router = express.Router(); 

const Image = require("../../Database/models/Image");
const multer = require("multer")

//Provides the path to the destination folder and defines a filename for the file (an image) uploaded
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './uploads/');
    },
    filename: function(req, file, cb) {
        cb(null, Date.now() + file.originalname);
    }
});

//Defines the file types which are acceptable to the server
const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        cb(null, true);
    } else {
        cb(null, false);
    }
}

//Creates an instance of the multer middleware  
const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 2024 * 5
    },
    fileFilter: fileFilter
});


//Parameter for upload.single() is filename passed
router.post('/upload', upload.single('imageData'), (req, res, next) => {
    console.log(req.body)

    const newImage = new Image ({
        imageName: req.body.imageName,
        imageData: req.file.path 
    });

    newImage.save()
        .then((result) => {
            console.log(result)
            res.status(200).json({
                success: true,
                document: result
            });
        })
        .catch((err) => next(err));
});

module.exports = router; 