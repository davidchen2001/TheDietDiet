const express = require("express");
const router = express.Router(); 
const upload = require("../../Database/middleware/upload");
const Image = require("../../Database/models/Image");
const multer = require("multer")
const upload = multer({dest: 'uploads/'})

//Parameter for upload.single() is filename passed
router.post('/upload', upload.single('file'), (req, res) => {
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