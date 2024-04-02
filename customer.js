var express = require('express');
var router = express.Router();
// Connection for bookingcontroler
var bookController=require('../controllers/CustomerControllers/bookingController.js');
// Connection for roomcontroller
var roomController=require('../controllers/OwnerControllers/roomcontroller.js');
// Connection for authController
var authController=require('../controllers/CustomerControllers/authController.js');




router.get('/login',function (req, res) {
    res.render('customer/login')
});
router.get('/home',function (req, res) {
    res.render('customer/home')
});

router.get('/ava-room',roomController.fetch);
router.post('/booked',bookController.save);
router.get('/bookdet',bookController.readData);
router.post('/save-form',authController.register);
router.post('/signIn',authController.login);
router.get('/delete/:id', bookController.delateData);
router.get('/blog',authController.readData);




module.exports = router;