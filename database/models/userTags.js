const Sequelize = require('sequelize');
const db = require('../../database/index.js')

const UserTags = db.define('UserTags', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  tag: Sequelize.STRING
}, { timestamps: false });

module.exports = UserTags;