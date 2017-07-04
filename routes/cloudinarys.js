const express = require('express');
const router = express.Router();
const cloudinary = require('cloudinary');
const multer = require('multer');

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})

const uploadImage = multer({ dest: 'uploads/' })

router.post('/newproduct', uploadImage.single('file'), (req, res) => {
  cloudinary.uploader.upload(req.file.path, (result) => {
    return res.json(result.url);
  });
});


module.exports = router;
