const Sequelize = require('sequelize');
const sequelize = new Sequelize('vapor', 'root', null, {
  host: 'localhost', dialect: 'mysql', logging: false
});

const Reviews = sequelize.define('Reviews', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  pos_neg: Sequelize.BOOLEAN,
  date: Sequelize.DATEONLY,

}, { timestamps: false });

module.exports = Reviews;