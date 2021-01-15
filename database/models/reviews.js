const Sequelize = require('sequelize')
const db = require('../index.js').sequelize

const Reviews = db.define('Reviews', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  pos_neg: {
    type: Sequelize.BOOLEAN,
  },
  date: {
    type: Sequelize.DATEONLY,
  }


})

module.exports = Reviews