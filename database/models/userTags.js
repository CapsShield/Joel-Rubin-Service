const Sequelize = require('sequelize');
const sequelize = new Sequelize('vapor', 'root', null, {
  host: 'localhost', dialect: 'mysql'
});

const UserTags = sequelize.define('UserTags', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  tag: Sequelize.STRING
}, { timestamps: false });

module.exports = UserTags;