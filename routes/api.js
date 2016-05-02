/**
 * Created by Santhosh on 4/30/2016.
 */
var express = require('express');
var router = express.Router();

//Models
var Product  = require('../models/products');
var User  = require('../models/user');
var Trip  = require('../models/trip');

// Routes

Product.methods(['get', 'post', 'put','delete']);
Product.register(router, '/products')

User.methods(['get', 'post', 'put','delete']);
User.register(router, '/users')

Trip.methods(['get', 'post', 'put','delete']);
Trip.register(router, '/trips')

// Return router
module.exports = router;