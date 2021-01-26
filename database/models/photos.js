const Sequelize = require('sequelize');
const db = require('../../database/index.js')

const Photos = db.define('Photos', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  description: Sequelize.STRING,
  photoUrl: Sequelize.STRING,
}, { timestamps: false });

module.exports = Photos;