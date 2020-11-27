const db = require('../db');

module.exports ={

    postinfo: function(data, callback) {
        var sql = "select * from post ";

        db.getResults(sql, function(status) {
            callback(status);
        });
    },

    postedit: function(id, callback) {
        var sql = "select * from post where id = '" + id + "'";

        db.getResults(sql, function(status) {
            callback(status);
        });
    },

    postdelete: function(id, callback) {
        var sql = "select * from post where id = '" + id + "'";

        db.getResults(sql, function(status) {
            callback(status);
        });
    },

    update: function(user, callback) {
        var sql = "update post set title = '" + user.title + "',photo='" + user.file + "' , description='" + user.description + "' where id='" + user.id + "'";

        //console.log(sql);

        db.execute(sql, function(status) {
            callback(status);
        });

    },

    delete: function(id, callback) {
        var sql = "delete from post where id = '" + id + "'";

        //console.log(sql);

        db.execute(sql, function(status) {
            callback(status);
        });
    },

}