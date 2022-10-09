const { request } = require('express');
const express = require('express');
const upload = require('../middlewares/upload');
const router = express.Router();

const authController = require('../controllers/authController');
const authenticate = require('../middlewares/authenticate');
const adminController = require('../controllers/adminController');

router.post('/register', upload.none(), authController.register);
router.post('/login', authController.login);
router.get('/me', authenticate, authController.getMe);

//Admin Path
router.post('/admin/login', adminController.login);

module.exports = router;
