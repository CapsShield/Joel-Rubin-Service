const Sequelize = require('sequelize');
const sequelize = new Sequelize('vapor', 'root', null, {
  host: 'localhost', dialect: 'mysql'
});


const Games = require('./models/games.js');
const GamesTags = require('./models/gamesTags.js');
const Photos = require('./models/photos.js');
const Reviews = require('./models/reviews.js');
const UserTags = require('./models/userTags.js');



//Assocs
Games.hasMany(Photos);
Photos.belongsTo(Games);
Games.hasMany(Reviews);
Reviews.belongsTo(Games);

// //Join Table Assocs
Games.belongsToMany(UserTags, { through: GamesTags });
UserTags.belongsToMany(Games, { through: GamesTags });



module.exports = {
  sequelize: sequelize,
  Games: Games,
  GamesTags: GamesTags,
  Photos: Photos,
  Reviews: Reviews,
  UserTags: UserTags
};