const Sequelize = require('sequelize');
const sequelize = new Sequelize('vapor', 'root', null, {
  host: 'localhost', dialect: 'mysql'
});

const Games = sequelize.define('Games', {
  id: {
    //fk in Photos, Reviews, GamesTags
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: Sequelize.STRING,

  gameHeaderImageUrl: Sequelize.STRING,

  gameSynopsis: Sequelize.STRING,

  releaseDate: Sequelize.DATEONLY,

  developer: Sequelize.STRING,

  publisher: Sequelize.STRING,

}, { timestamps: false });

module.exports = Games