var createModel=require('../../models/onwerModels');//to cnnecting a ownermodel
module.exports={
crudForm:function(req, res) {
  console.log("form");
    res.render('crud-form');

},
//store the data
register:function(req,res){

  const inputData= {
    name:     req.body.name,
    email: req.body.email,
    password:         req.body.password,
    
  };
  createModel.createData(inputData,function(data){
      res.redirect('login');
      console.log(data.affectedRows + " record created");
    });
  console.log(inputData)
},
//help to authenticate the impute
login:function(req, res) {
        var email =  req.body.email;
        var password = req.body.password;
        if (email && password) {
            createModel.login(email,password,function(data){
                if (data.length > 0) {
        
                    res.redirect('home');
                } else {
                    res.send('Incorrect Username and/or Password!');
                }
                res.end();
          });
        }else {
            res.send('Please enter Username and Password!');
            res.end();
        }
    },

}