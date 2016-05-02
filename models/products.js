/**
 * Created by Santhosh on 4/30/2016.
 */
var restful = require('node-restful');
var mongoose = restful.mongoose;

var productSchema  = new mongoose.Schema({
    name :String,
    sku :String,
    price :String
});

module.exports   = restful.model('Products', productSchema);