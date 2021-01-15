const Sequelize = require('sequelize')
const { sequelize } = require('../index.js')

const Games = sequelize.define('Games', {
  id: {
    //fk in Photos, Reviews, GamesTags
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING,
  },
  gameHeaderImageUrl: {
    type: Sequelize.STRING,
  },
  gameSynopsis: {
    type: Sequelize.STRING,
  },
  releaseDate: {
    type: Sequelize.DATEONLY,
  },
  developer: {
    type: Sequelize.STRING,
  },
  publisher: {
    type: Sequelize.STRING,
  },

})

module.exports = Games