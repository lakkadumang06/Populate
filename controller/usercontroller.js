const { response } = require('express');
const bcrypt = require('bcrypt');
var usermodel = require('../model/usermodel');
var jwt = require('jsonwebtoken');

exports.insert = async (req, res) => {

    var b_pass = await bcrypt.hash(req.body.password, 10);

    req.body.password = b_pass;

    var data = await usermodel.create(req.body);

    try {
        res.status(200).json({
            status: data
        })
    }
    catch {
        res.status(500).json({
            status: "Error !!!"
        })
    }
}

exports.get_data = async (req, res) => {
    var data = await usermodel.find();
    // var data = await usermodel.find().select("email");
    // var data = await usermodel.find().select("email").select("password");

    try {
        res.status(200).json({
            status: data
        })
    }
    catch {
        res.status(500).json({
            status: "Error !!!"
        })
    }

}

exports.update_data = async (req, res) => {

    var id = req.params.id;
    var data = await usermodel.findByIdAndUpdate(id, req.body);

    try {
        res.status(200).json({
            status: "Data Updated !!!"
        })
    }
    catch {
        res.status(500).json({
            status: "Error !!!"
        })
    }
}

exports.delete_data = async (req, res) => {

    var id = req.params.id;
    var data = await usermodel.findByIdAndDelete(id);

    try {

        res.status(200).json({
            status: "Data Deleted !!!"
        })
    }
    catch {
        res.status(500).json({
            status: "Error !!!"
        })
    }

}

exports.get_single = async (req, res) => {

    var id = req.params.id;
    var data = await usermodel.findById(id);

    try {
        res.status(200).json({
            status: data
        })

    }
    catch {
        res.status(500).json({
            status: "Error !!!"
        })
    }

}

exports.get_bymail = async (req, res) => {

    var data = await usermodel.find({ "email": req.body.email });

    console.log(data[0].name)

    try {
        res.status(200).json({
            status: data
        })
    } catch {
        res.status(500).json({
            status: "Error !!!"
        })
    }
}

exports.login = async (req, res) => {

    var data = await usermodel.find({ "email": req.body.email });
    console.log(data.length)
    if (data.length == 1) {
        bcrypt.compare(req.body.password, data[0].password, async function (err, result) {

            if (result == true) {
                var token = jwt.sign({ id: data[0].id }, "cdmi");
                res.status(200).json({
                    status: "Login Success",
                    token
                })
            }
            else {
                res.status(200).json({
                    status: "Check Your Email And Password"
                })
            }
        });
    } else {
        res.status(200).json({
            status: "Check Your Email And Password"
        })
    }
}

exports.logout = async (req, res) => {
    res.status(200).json({
        status: "logout done...✅"
    })
}