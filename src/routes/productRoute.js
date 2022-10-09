const express = require('express');

const productController = require('../controllers/productController');
const upload = require('../middlewares/upload');

const router = express.Router();
console.log('test');

// router.route('/').post(upload.single('image'), productController.createPost);
router.get('/', productController.getAllProduct);
router.get('/:id', productController.getProduct);
router.post('/create', upload.none(), productController.createPost);
router.patch('/:id/edit', upload.none(), productController.editPost);
router.delete('/:id/delete', upload.none(), productController.deletePost);

module.exports = router;
