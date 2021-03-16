const controller = require("../controllers/lesson.controller");
const { authJwt } = require("../middleware");

module.exports = function(app) {
    app.post("/api/lessons/create_lesson",[authJwt.verifyToken, authJwt.isAdmin], controller.create_lesson);
    app.get("/api/lessons/get_lessons", controller.get_lessons)
};