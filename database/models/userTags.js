const Sequelize = require('sequelize')
const db = require('../index.js').sequelize

const UserTags = db.define('UserTags', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  tag: {
    type: Sequelize.STRING
  }

})

module.exports = UserTags;