var express = require('express');
var bodyParser = require('body-parser');

var properties = require('./config/properties');
var db = require('./config/database');

var usersRoutes = require('./api/users/users.routes');
var app = express();

var bodyParserJSON = bodyParser.json();
var bodyParserURLEncoded = bodyParser.urlencoded({extended:true});

var router = express.Router();

db();

app.use(bodyParserJSON);
app.use(bodyParserURLEncoded);


app.use('/api',router);

usersRoutes(router);

app.listen(properties.PORT, (req, res) => {
    console.log(`Server is running on ${properties.PORT} port.`);
})