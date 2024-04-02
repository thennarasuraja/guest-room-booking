var roomModel=require('../../models/roomModel');//to connecting a roommodel

const multer = require("multer")
const path = require("path")


module.exports={



save:function(req, res) {
    var storage = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, "public/temp")
        },
        filename: function (req, file, cb) {
            cb(null,Date.now()+path.extname(file.originalname));
        }
    })
    var upload = multer({
        storage: storage,
    }).any();  
    
    upload(req,res,function(err) {
        if(err) {
            res.send(err)
        }
        else {
            var filename=  req.files[0].filename;

            const inputData= {
                roomname:req.body.roomname,
                roomlocal:req.body.roomlocal,
                roommin:req.body.roommin,
                roommix:req.body.roommix,
                roomrend:req.body.roomrend,
                roomsize:req.body.roomsize,
                image:filename,
                moreinfo:req.body.moreinfo,
              };
            roomModel.createData(inputData,function(data){
               res.redirect('forms');
                console.log(data.affectedRows + " record created");
                
            });
        }
    });
    
   
},
 
   readData:function(req,res){
    
    roomModel.readData(function(data){
    res.render('onwer/roomdetails', {fetchData:data}); 
    });
  }, 
     fetch:function(req,res){
    
    roomModel.readData(function(data){
    res.render('customer/ava_room',{fetchData:data}); 
    });
  }, 
  delateData:function(req,res){
   
  const deleteId=req.params.id;
   roomModel .delateData(deleteId,function(data){
    console.log("bye")
    console.log(data.affectedRows + " record deleted");
  });
 
},
editData:function(req,res){
    const editId=req.params.id;
    roomModel.editData(editId,function(data){
      res.render('onwer/roomupdate', { editData:data});
      console.log(data.affectedRows + " record fetched");
    });
   
},
updateData:function(req,res){
var storage = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, "public/temp")
        },
        filename: function (req, file, cb) {
            cb(null,Date.now()+path.extname(file.originalname));
        }
    })
    var upload = multer({
        storage: storage,
    }).any();  
    
    upload(req,res,function(err) {
        if(err) {
            res.send(err)
        }
        else {
            var filename=  req.files[0].filename;

            const inputData= {
                roomname:req.body.roomname,
                roomlocal:req.body.roomlocal,
                roommin:req.body.roommin,
                roommix:req.body.roommix,
                roomrend:req.body.roomrend,
                roomsize:req.body.roomsize,
                image:filename,
                moreinfo:req.body.moreinfo,
              };
            const updateId=req.params.id;
            roomModel.updateData(inputData,updateId,function(data){
           res.render('onwer/dashb');
            console.log(data.affectedRows + " record(s) updated");
            });
        }
    });
}
 }


