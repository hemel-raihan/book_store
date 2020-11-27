const db = require('../db');

module.exports ={

insert: function(user, callback) {
      
    var sql = "insert into cregistration VALUES ('', '" + user.email + "' , '" + user.pass + "' , '" + user.id + "')";
    
    //console.log(sql);

    db.execute(sql, function(status) {
        callback(status);
    });
},

}