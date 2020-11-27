const db = require('../db');

module.exports ={

    orderlist: function(callback) {
        var sql = "select * from bookorder ";

        db.getResults(sql, function(status) {
            callback(status);
        });
    },

   
}