const db = require('../db');

module.exports ={

    ProfileInfo: function(data, callback) {
        var sql = "select * from cregistration where email = '" + data.email + "'";

        db.getResults(sql, function(status) {
            callback(status);
        });
    },

}