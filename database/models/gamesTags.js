const Sequelize = require('sequelize');
const db = require('../../database/index.js')

const GamesTags = db.define('GamesTags', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },


}, { timestamps: false });

module.exports = GamesTags;