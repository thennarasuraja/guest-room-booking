var express = require('express');
var router = express.Router();
// Connection for roomcontroller
var roomController=require('../controllers/OwnerControllers/roomcontroller.js');
// Connection for authController
var authController=require('../controllers/OwnerControllers/authController.js');



router.get('/forms',function (req, res) {
    res.render('onwer/formpage')
});
router.get('/login',function (req, res) {
    res.render('onwer/login')
});
router.get('/home',function (req, res) {
    res.render('onwer/dashb')
});
router.get('/roomdeta',function (req, res) {
res.render('onwer/roomdetails')
});
router.get('/delete/:id', roomController.delateData);
router.get('/edit/:id', roomController.editData);
router.post('/update/:id', roomController.updateData);
router.post('/saveform',authController.register);
router.post('/signIn',authController.login);
router.post('/room',roomController.save);

router.get('/roomdet',roomController.readData);



module.exports = router;