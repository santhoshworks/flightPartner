/**
 * Created by Santhosh on 4/30/2016.
 */
// Dependencies
var express = require('express');
var mongoose = require('mongoose');
var bodyParser  = require('body-parser')

// MongoDB
mongoose.connect('mongodb://localhost/rest_test');

//Express
var app = express();
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json())

//Routes
app.use('/api', require('./routes/api'))

//Start Server
app.listen(5000);
