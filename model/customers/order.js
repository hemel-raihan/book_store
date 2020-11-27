const db = require('../db');

module.exports = 
{
    orderinfo: function(data, callback) {
        var sql = "select * from post where id = '" + data.id + "'";

        db.getResults(sql, function(status) {
            callback(status);
        });
    },

    bookorder: function(user, callback) {
      
        var sql = "insert into bookorder VALUES ('', '" + user.id + "' , '" + user.title + "' , '" + user.price + "' , '" + user.email + "')";
		
        //console.log(sql);

        db.execute(sql, function(status) {
            callback(status);
        });
    },

    ProfileInfo: function(data, callback) {
        var sql = "select * from cregistration where email = '" + data.email + "'";

        db.getResults(sql, function(status) {
            callback(status);
        });
    },


   
   
}