var db=require('../database.js');//connection for database
module.exports={ 

//store the data For the database

  createData:function(inputData,callback){
    var sql = 'INSERT INTO owner SET ?'; 
    db.query(sql, inputData,function (err, data) {
    if (err) throw err;
      return callback(data);
    });
},

//authedicate the data For the database

    login:function(email,password,callback){
        var sql = 'SELECT * FROM owner WHERE email = ? AND password = ?'; 
        db.query(sql, [email,password],function (err, data) {
        if (err) throw err;
          return callback(data);
        });
      },
}

