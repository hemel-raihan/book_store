const db = require('../db');

module.exports = 
{
    fileupload: function(data, callback) {
        var sql = "select * from cregistration where email = '" + data.email + "'";

        db.getResults(sql, function(status) {
            callback(status);
        });
    },

    insert: function(user, callback) {
      
        var sql = "insert into post VALUES ('', '" + user.title + "' , '" + user.file + "' , '" + user.price + "' , '" + user.category + "' , '" + user.aurthor + "' , '" + user.description + "' , '" + user.id + "')";
		
        

        db.execute(sql, function(status) {
            callback(status);
        });
    },
}