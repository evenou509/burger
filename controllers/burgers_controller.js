var express = require("express");

var router = express.Router();

// Import the burger.js
var burger = require("../models/burger.js");

router.get('/burgers', function(req, res){
    burger.all(function(data){
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post('/burgers/create', function(req, res){
    burger.create(req.body.burger_name, function(data){
        console.log(data);
        res.redirect('/burgers');
    });
});

router.put('/api/burgers/:id', function(req, res){
    burger.update(req.params.id, function(result){
        if (result.changedRows === 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }

    });
});

// Export the router
module.exports = router;