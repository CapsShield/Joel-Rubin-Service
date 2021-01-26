const Sequelize = require('sequelize');
const db = require('../../database/index.js')

const Reviews = db.define('Reviews', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  pos_neg: Sequelize.BOOLEAN,
  date: Sequelize.DATEONLY,

}, { timestamps: false });

module.exports = Reviews;