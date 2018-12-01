// Import database connection
var connection = require("../config/connection.js");

var orm = {
    // Select all the burger in the database 
    selectAll: function(callback) {
        var queryString = "SELECT * FROM burgers";
        connection.query(queryString, function(err, data){
            if(err){
                throw err;
            }
            callback(data);
        });
    },
    // insert burger into the database
    create: function(val, callback){
        var queryString = "INSERT INTO burgers (burger_name) VALUE (?)";
        connection.query(queryString, [val], function(err, result){
            if(err) {
                throw err;
            }

            callback(result);
        });
    },
    // update burger in the database 
    updateOne: function(val, callback){
        var queryString = "UPDATE burgers SET devoured = true WHERE id=?";
        connection.query(queryString, [val], function(err, result){
            if(err){
                throw err;
            }

            callback(result);
        });
    }
};

// export ORM object
module.exports = orm; 