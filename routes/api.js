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

//Product.methods(['get', 'post', 'put','delete']);
//Product.register(router, '/products')

//User.methods(['get', 'post', 'put','delete']);
//User.register(router, '/users')

//Trip.methods(['get', 'post', 'put','delete']);
//Trip.register(router, '/trips')


// Routes
router.use(function(req, res, next) {
    // do logging
    console.log('Something is happening.');
    next(); // make sure we go to the next routes and don't stop here
});

router.route('/users')

    // create a bear (accessed at POST http://localhost:8080/api/bears)
    .post(function(req, res) {
        var user = new User();      // create a new instance of the Bear model
        user.name = req.body.name;  // set the bears name (comes from the request
        user.email = req.body.email;
        user.phoneNumber = req.body.phoneNumber;
        user.age = req.body.age;
        user.gender = req.body.gender;
        // save the bear and check for errors
        user.save(function(err) {
            if (err)
                res.send(err);

            res.json({ message: 'User created!' });
        });

    })
    .get(function(req, res) {
        User.find(function(err, users) {
            if (err)
                res.send(err);

            res.json(users);
        });
    });
// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });
});


// Return router
module.exports = router;