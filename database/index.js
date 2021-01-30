require('dotenv').config()
const Sequelize = require('sequelize');
const sequelize = new Sequelize('vapor', 'root', process.env.SQL_PASSWORD, {
  host: 'localhost', dialect: 'mysql', logging: false
});

module.exports = sequelize;

