const config = require("../configs/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(
    config.DB,
    config.USER,
    config.PASSWORD,
    {
        host: config.HOST,
        dialect: config.dialect,
        operatorsAliases: false,

        pool: {
            max: config.pool.max,
            min: config.pool.min,
            acquire: config.pool.acquire,
            idle: config.pool.idle
        }
    }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("../models/user.model.js")(sequelize, Sequelize);
db.role = require("../models/role.model.js")(sequelize, Sequelize);
db.lesson = require("./lesson.model")(sequelize, Sequelize);
db.review = require("../models/review.model")(sequelize, Sequelize);

db.role.belongsToMany(db.user, {
    through: "user_roles",
    foreignKey: "roleId",
    otherKey: "userId"
});
db.user.belongsToMany(db.role, {
    through: "user_roles",
    foreignKey: "userId",
    otherKey: "roleId"
});
db.lesson.belongsToMany(db.user, {
    through: "user_lessons",
    foreignKey: "lesson_id",
    otherKey: "userId"
});
db.user.belongsToMany(db.lesson, {
    through: "user_lessons",
    foreignKey: "userId",
    otherKey: "lesson_id"
})
db.review.belongsTo(db.user, {
    foreignKey: 'userId',
    as: 'author'
})

db.ROLES = ["user", "admin", "moderator"];

module.exports = db;
