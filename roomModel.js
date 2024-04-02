var db=require('../database');//connection for database


module.exports={ 

//store the data For the database
  createData:function(inputData,callback){
    var sql = 'INSERT INTO room SET ?'; 
    db.query(sql, inputData,function (err, data) {
    if (err) throw err;
      return callback(data);
    });
  },
//fetch the data For the database
  readData:function(callback){
    var sql='SELECT * FROM room';
    db.query(sql, function (err, data, fields) {
    if (err) throw err;
    return callback(data);
    });  
  },
    
  //delete the data For the database
    delateData:function(deleteId,callback){
    var sql = 'DELETE FROM room WHERE id = ?';
    db.query(sql, [deleteId], function (err, data) {
    if (err) throw err;
     return callback(data);
  });
  },
  editData:function(editId, callback){
    
    var sql=`SELECT * FROM room WHERE id=${editId}`;
    db.query(sql, function (err, data) {
      if (err) throw err;
      return callback(data[0]);
    });
  },
  updateData:function(inputData,updateId,callback){
    
    var sql = `UPDATE room SET ? WHERE id= ?`;
    db.query(sql, [inputData, updateId], function (err, data) {
    if (err) throw err;
     return callback(data);
  });
  }
}