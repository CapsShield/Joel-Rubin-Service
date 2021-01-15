const Sequelize = require('sequelize')
const db = require('../index.js').sequelize

const GamesTags = db.define('GamesTags', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  }

})

module.exports = GamesTags