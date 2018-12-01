// Import the ORM
var orm = require("../config/orm.js");

// call orm method, passing 
var burger = {
    all: function(callback){
        orm.selectAll(function(res){
            callback(res);
        });
    },

    create: function(name, callback){
        orm.create(name, function(res){
            callback(res);
        });
    },

    update: function(id, callback){
        orm.updateOne(id, function(res){
            callback(res);
        });
    }
}

// Export the datadase functions
module.exports = burger;