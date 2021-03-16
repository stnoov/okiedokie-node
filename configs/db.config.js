module.exports = {
    HOST: "eu-cdbr-west-03.cleardb.net",
    USER: "bb173cd830ff7d",
    PASSWORD: "08f537e0",
    DB: "heroku_c3f9d0624c356bd",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        }
    }
};