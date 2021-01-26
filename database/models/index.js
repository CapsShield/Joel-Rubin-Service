const Games = require('./games.js');
const GamesTags = require('./gamesTags.js');
const Photos = require('./photos.js');
const Reviews = require('./reviews.js');
const UserTags = require('./userTags.js');

Games.hasMany(Photos);
Photos.belongsTo(Games);
Games.hasMany(Reviews);
Reviews.belongsTo(Games);

// //Join Table Assocs
Games.belongsToMany(UserTags, { through: GamesTags });
UserTags.belongsToMany(Games, { through: GamesTags });

module.exports = {
  Games, GamesTags, Photos, Reviews, UserTags
}