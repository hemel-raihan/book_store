const db = require('../db');

module.exports ={

    ProfileInfo: function(value, callback) {
        var sql = "select * from cregistration where email = '" + value.email + "'";

        db.getResults(sql, function(status) {
            callback(status);
        });
    },

    PostInfo: function(callback) {
        var sql = "select * from post ";

        db.getResults(sql, function(status) {
            callback(status);
        });
    },

    postdetails: function(id, callback) {
        var sql = "select * from post where id = '" + id + "'" ;

        db.getResults(sql, function(status) {
            callback(status);
        });
    },

}