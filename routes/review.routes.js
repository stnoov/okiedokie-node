const controller = require("../controllers/review.controller");
const { authJwt } = require("../middleware");

module.exports = function(app) {
    app.post("/api/reviews/create_review",[authJwt.verifyToken], controller.create_review);
    app.get("/api/reviews/get_reviews", controller.get_reviews)
};
