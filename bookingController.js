var createModel=require('../../models/bookingModel');//to connecting a bookmodel

const multer = require("multer")
const path = require("path")
module.exports={
crudForm:function(req, res) {
  console.log("form");
    res.render('crud-form');

},
//store the data and send the model
save:function(req,res){

  const inputData= {
    name:     req.body.name,
    email: req.body.email,
    number: req.body.number,
    roomname:         req.body.roomname,
    howmany:         req.body.howmany,
    todayd:         req.body.todayd,
    checkoutd:         req.body.checkoutd,
    
  };
  createModel.createData(inputData,function(data){
      res.redirect('/home',+"",{fetchData:data});
      console.log(data.affectedRows + " record created");
    });
  console.log(inputData)
},

//it help to fetch the data For the database
    readData:function(req,res){
    
    createModel.readData(function(data){
    res.render('onwer/roomBookeddet',{fetchData:data});
    console.log(data) 
    });
  },
  //it help to delete data For the database
   delateData:function(req,res){
   
  const deleteId=req.params.id;
   roomModel .delateData(deleteId,function(data){
    console.log("bye")
    console.log(data.affectedRows + " record deleted");
  });
 
}
   

}