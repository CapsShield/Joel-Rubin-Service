require('dotenv').config()
const Sequelize = require('sequelize');
const sequelize = new Sequelize('vapor', 'root', 'V!foZyrl84H', {
  host: 'localhost', dialect: 'mysql', logging: false
});

module.exports = sequelize;

