const config = require('./');
const db = config.db;
const username = db.username;
const password = db.password;
const database = db.database;
const host = db.host;

module.exports = {
  development: {
    username: 'jackpot_degen',
    password: 'jd1234',
    database: 'jackpot_degen_app',
    host,
    dialect: 'postgres',
    seederStorage: 'sequelize',
  },
  test: {
    dialect: "sqlite",
    DB_CONN: "sqlite.memory",
    logging: false,
    seederStorage: 'sequelize',
  },
  production: {
    use_env_variable: 'DATABASE_URL' + '&sslmode=require',
    dialect: 'postgres',
    seederStorage: 'sequelize',
  },
};
