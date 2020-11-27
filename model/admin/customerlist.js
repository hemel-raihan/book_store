const db = require('../db');

module.exports ={

    customerlist: function(data, callback) {
        var sql = "select * from cregistration where type = 1";

        db.getResults(sql, function(status) {
            callback(status);
        });
    },

    customerdelete: function(id, callback) {
        var sql = "select * from cregistration where id = '" + id + "'";

        db.getResults(sql, function(status) {
            callback(status);
        });
    },

    deletecustomer: function(id, callback) {
        var sql = "delete from cregistration where id = '" + id + "'";

        //console.log(sql);

        db.execute(sql, function(status) {
            callback(status);
        });
    },
}