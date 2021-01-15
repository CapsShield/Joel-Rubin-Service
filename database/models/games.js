const Sequelize = require('sequelize');
const sequelize = new Sequelize('vapor', 'root', null, {
  host: 'localhost', dialect: 'mysql'
})

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

}, { timestamps: false })

module.exports = Games