require('dotenv').config()
const Sequelize = require('sequelize');
const sequelize = new Sequelize('vapor', 'root', null, {
  host: 'localhost', dialect: 'mysql', logging: false
});

module.exports = sequelize;

