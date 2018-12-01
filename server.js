// dependencies
var express = require("express");
var bodyParser = require("body-parser");

// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 3000;

// Create an instance of express app
var app = express();

app.use(express.static("public"));
// Sets up the express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var exphbs = require("express-handlebars");

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// import route to the server
var routes = require("./controllers/burgers_controller.js");

app.use(routes)

app.listen(port, function() {
    console.log("App listening on PORT "+ port);
})