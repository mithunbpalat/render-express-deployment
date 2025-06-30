const express = require('express');
const router = express.Router();
const { verifyToken } = require('../middleware/verifyToken');
const userController = require('../controllers/userController');
const upload = require('../middleware/multerConfig');


// Routes
router.get('/create-admin', userController.createAdmin);
router.post('/create', verifyToken, userController.createUser);
router.post('/login', userController.login);
router.post('/adminlogin' ,userController.adminlogin);
router.post('/userlogin', userController.userlogin);
router.get('/me', verifyToken, upload.fields([
  { name: "image", maxCount: 1 },
  { name: "biodata", maxCount: 1 }
]), userController.getProfile);
router.put('/update-profile', verifyToken, upload.fields([
  { name: 'imageFile', maxCount: 1 },
  { name: 'pdfFile', maxCount: 1 }
]), userController.updateProfile);
router.post('/change-password', verifyToken, userController.changePassword);
router.post('/change-password', verifyToken, userController.changePassword);
router.get('/users', verifyToken, userController.getAllUsers);
// router.post('/datatables', verifyToken, userController.getUsersDataTable);
router.get('/paginated', verifyToken, userController.getPaginatedUsers);


module.exports = router;
