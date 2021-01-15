const Sequelize = require('sequelize');
const sequelize = new Sequelize('vapor', 'root', null, {
  host: 'localhost', dialect: 'mysql'
});

const Photos = sequelize.define('Photos', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  description: Sequelize.STRING,
  photoUrl: Sequelize.STRING,
}, { timestamps: false });

module.exports = Photos;