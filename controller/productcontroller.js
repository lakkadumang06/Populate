var express = require('express');
var router = express.Router();

var product = require('../model/productmodel');

exports.insert_product = async (req, res) => {
    try {
        var data = await product.create(req.body);
        res.status(200).json({
            status: "product insert",
            data
        })

    } catch (error) {
        res.status(200).json({
            status: error
        })
    }
}


exports.get_product = async (req, res) => {
    try {
        var data = await product.find().populate("cat_id").select("cat_id");
        res.status(200).json({
            status: "product ",
            data
        })
    } catch (error) {
        res.status(200).json({
            status: error
        })
    }
}
