const Sequelize = require('sequelize');
const sequelize = new Sequelize('vapor', 'root', null, {
  host: 'localhost', dialect: 'mysql'
});

const GamesTags = sequelize.define('GamesTags', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  test: Sequelize.STRING,

}, { timestamps: false });

module.exports = GamesTags;