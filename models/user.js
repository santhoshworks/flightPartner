/**
 * Created by Santhosh on 4/30/2016.
 */
var restful = require('node-restful');
var mongoose = restful.mongoose;

var userSchema  = new mongoose.Schema({
    name :String,
    email :String,
    phoneNumber :String,
    age:String,
    gender:String
});

module.exports   = restful.model('Users', userSchema);