const db = require("../models");
const Lesson = db.lesson;


exports.create_lesson = (req, res) => {
    Lesson.create({
        title: req.body.title,
        lesson_type: req.body.lesson_type,
        date: req.body.date,
        num_participants: req.body.num_participants,
        link: req.body.link,
        price: req.body.price,
        teacher: req.body.teacher
    }).then(() =>
        res.send({ message: "Lesson was successfully created" })
    )
        .catch(err => {
            res.status(500).send({ message: err.message });
        });
};

exports.get_lessons = (req, res) => {
    Lesson.findAll()
        .then(lessons => {
            res.send({ message: lessons })
        })
}