/**
 * Created by Santhosh on 4/30/2016.
 */
var restful = require('node-restful');
var mongoose = restful.mongoose;

var flightSchema  = new mongoose.Schema({
    userID:String,
    from :String,
    to :String,
    startDate :String,
    flightNumber: String
});

module.exports   = restful.model('flightInfo', flightSchema);