var db=require('../database.js');//connection for database
module.exports={ 

//store the data to the database

  createData:function(inputData,callback){
    var sql = 'INSERT INTO booking SET ?'; 
    db.query(sql, inputData,function (err, data) {
    if (err) throw err;
      return callback(data);
    });
},

//fetch the data For the database

  readData:function(callback){
    var sql='SELECT * FROM booking';
    db.query(sql, function (err, data, fields) {
    if (err) throw err;
    return callback(data);
    });  
  },

//delete the data For the database

  delateData:function(deleteId,callback){
    var sql = 'DELETE FROM booking WHERE id = ?';
    db.query(sql, [deleteId], function (err, data) {
    if (err) throw err;
     return callback(data);
  });
  }
}