const express = require("express");
const router = express.Router(); 

const Image = require("../../db/models/Image");
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
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' || file.mimetype === 'image/gif') {
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


/**
 * @route   POST /api/images/upload
 * @desc    POST an image 
 * @access  Private (Public for now, will add token access)
 */

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

/**
 * @route   POST /api/images/delete
 * @desc    Delete an image from the database 
 * @access  Private 
 */

router.delete('/delete/:id', (req, res) =>  {
    
    Image.findById(req.params.id)
        .then(image => image.remove().then(() => res.json({ success: true })))
        .catch(err => res.status(404).json({ success: false }));

}); 

module.exports = router; 