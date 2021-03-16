module.exports = (sequelize, Sequelize) => {
    const Lesson = sequelize.define("lessons", {
        title: {
            type: Sequelize.STRING
        },
        lesson_type: {
            type: Sequelize.STRING
        },
        date: {
            type: Sequelize.STRING
        },
        num_participants: {
            type: Sequelize.STRING
        },
        link: {
            type: Sequelize.STRING
        },
        price: {
            type: Sequelize.STRING
        },
        teacher: {
            type: Sequelize.STRING
        }
    });

    return Lesson;
};