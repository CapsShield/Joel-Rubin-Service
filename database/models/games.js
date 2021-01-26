const Sequelize = require('sequelize');
const db = require('../../database/index.js')

const Games = db.define('Games', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: Sequelize.STRING,

  gameHeaderImageUrl: Sequelize.STRING,

  gameSynopsis: Sequelize.TEXT,

  releaseDate: Sequelize.DATEONLY,

  developer: Sequelize.STRING,

  publisher: Sequelize.STRING,

}, { timestamps: false });



module.exports = Games;