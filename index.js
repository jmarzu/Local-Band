var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();

// JSON web token dependencies
var expressJWT = require('express-jwt');
var jwt = require('jsonwebtoken');
var secret = process.env.JWT_SECRET;

// // Mongoose
// var mongoose = require('mongoose');
// // var User = require('./models/user');
// // var Post = require('./models/post');
// //TODO: I don't have any models or a proper db set up yet
// // mongoose.connect('mongodb://localhost/localband');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
app.use(require('morgan')('dev'));
app.use(express.static(__dirname + '/public'));

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/public/index.html'));
});

var server = app.listen(process.env.PORT || 3000);

module.exports = server;
