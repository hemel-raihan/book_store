const db = require('../db');

module.exports ={

    validate: function(user, callback) {
        var sql = "select * from cregistration where email='" + user.email + "' and password='" + user.password + "'";
        db.getResults(sql, function(results) {
            if (results.length > 0) {
                callback(true,results[0].type);
            } else {
                callback(false);
            }
        });
    },

}