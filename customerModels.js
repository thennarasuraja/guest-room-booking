var db=require('../database.js');//connection for database
module.exports={ 
 //delete the data For the database
  createData:function(inputData,callback){
    var sql = 'INSERT INTO customer SET ?'; 
    db.query(sql, inputData,function (err, data) {
    if (err) throw err;
      return callback(data);
    });
},
//authendicate the data For the database
    login:function(email,password,callback){
        var sql = 'SELECT * FROM customer WHERE email = ? AND password = ?'; 
        db.query(sql, [email,password],function (err, data) {
        if (err) throw err;
          return callback(data);
        });
      },
}

