const Sequelize = require('sequelize')
const db = require('../index.js').sequelize

const Photos = db.define('Photos', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  description: {
    type: Sequelize.STRING,
  },
  photoUrl: {
    type: Sequelize.STRING,
  },

})

module.exports = Photos