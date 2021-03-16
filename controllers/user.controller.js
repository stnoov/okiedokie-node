const db = require("../models");
const User = db.user;

exports.allAccess = (req, res) => {
    res.status(200).send("Public Content.");
};

exports.userBoard = (req, res) => {
    res.status(200).send("Public Content.");
};

exports.adminBoard = (req, res) => {
    User.findAll({attributes: ['first_name','last_name', 'age', 'email', 'balance']}).then(users => {
        res.send(({ message: users }));
    });
};

exports.moderatorBoard = (req, res) => {
    res.status(200).send("Moderator Content.");
};