var express = require('express');
const bodyParser = require('body-parser');
var path = require('path');
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
const multer = require('multer');

     // view engine setup

app.use(express.static(path.join(__dirname, 'public'))); 
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
//Route
const onwerRoute = require('./routes/onwer');
var customer = require('./routes/customer');
app.use('/onwer', onwerRoute);
app.use('/customer', customer);

       //Connect To css
app.use(express.static('public'));
app.use(express.static("js"));
app.use(express.static("images"));


       //connect to views page

app.get('/',function (req, res) {
res.render('login')
});
app.get('/ownerlogin',function (req, res) {
res.render('onwer/register')
});
app.get('/home',function (req, res) {
res.render('customer/home')
});
app.get('/home1',function (req, res) {
res.render('customer/home')
});
app.get('/ava-room',function (req, res) {
res.render('customer/ava_room')
});

         //port

app.listen(8000, function () {
  console.log('Listening to Port 8000');
});

app.use((req, res, next) => {
const err = new Error('Not Found');
  err.status = 404;
  next(err);
});