require('dotenv').config();
const Sequelize = require('sequelize');
const db = require('./index.js');

const { gameSeed, gamesTagsSeed, photoSeed, reviewSeed, userTagSeed } = require('./seedData/index.js');
const { Games, GamesTags, Photos, Reviews, UserTags } = require('./models/index.js');



db.sync({ force: true })
  .then(() => {
    console.log("synced")
  })
  .then(() => {
    return Games.bulkCreate(gameSeed)
  })
  .then(() => {
    return Photos.bulkCreate(photoSeed)
  })
  .then(() => {
    return UserTags.bulkCreate(userTagSeed)
  })
  .then(() => {
    return Reviews.bulkCreate(reviewSeed)
  })
  .then(() => {
    return GamesTags.bulkCreate(gamesTagsSeed)
  })
  .then(() => {
    process.exit()
  })
  .catch((err) => {
    console.error(err)
  });



// module.exports = {
//   sequelize, Games, GamesTags, Photos, Reviews, UserTags
// };