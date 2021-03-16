const db = require("../models");
const Review = db.review;
const User = db.user;
const config = require("../configs/auth.config");
const jwt = require("jsonwebtoken");

exports.create_review = (req, res) => {
    let token = req.headers["x-access-token"]

    jwt.verify(token, config.secret, (err, decoded) => {
        if (err) {
            return res.status(401).send({
                message: "Unauthorized!"
            });
        }
        req.userId = decoded.id;
    });

    Review.create({
        message: req.body.message,
        userId: req.userId
    }).then(() =>
        res.send({ message: 1 })
    )
        .catch(err => {
            res.status(500).send({ message: err.message });
        });
};

exports.get_reviews = (req, res) => {
    Review.findAll({include: [{model: User, as: "author", attributes: ['first_name', 'last_name']}]})
        .then(reviews => {
            res.send({ message: reviews })
        })
}
