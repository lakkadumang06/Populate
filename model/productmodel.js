var mongoose = require('mongoose');


var productschema = new mongoose.Schema({
    product_name: {
        type: String
    },
    cat_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"category"
    }
});

module.exports = mongoose.model('product', productschema);