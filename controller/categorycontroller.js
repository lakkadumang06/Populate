var express = require('express');
var router = express.Router();

var category = require('../model/categorymodel');

exports.insert_category = async (req, res) => {
    try {
        var data = await category.create(req.body);
        res.status(200).json({
            status: "category insert",
            data
        })

    } catch (error) {
        res.status(200).json({
            status: error
        })
    }
}


exports.get_category = async (req, res) => {
    try {
        var data = await category.find();
        res.status(200).json({
            status: "category ",
            data
        })
    } catch (error) {
        res.status(200).json({
            status: error
        })
    }
}

