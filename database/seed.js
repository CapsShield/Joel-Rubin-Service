const { Games, GamesTags, Photos, Reviews, UserTags } = require('./index.js');
const { gameSeed, gamesTagsSeed, photoSeed, reviewSeed, userTagSeed } = require('./seedData/index.js')
const Sequelize = require("sequelize")
const sequelize = new Sequelize('vapor', 'root', null, {
  host: 'localhost', dialect: 'mysql'
});



sequelize.sync({ force: true }).then(() => {
  console.log("synced")
})
  .then(() => {
    return Games.bulkCreate(gameSeed)
  })
  // .then(() => {
  //   return Photos.destroy({ truncate: true })
  // })
  // .then(() => {
  //   return Photos.bulkCreate(photoSeed)
  // })
  // .then(() => {
  //   return Reviews.bulkCreate(reviewSeed)
  // })
  // .then(() => {
  //   return GamesTags.bulkCreate(gamesTagsSeed)
  // })
  .then(() => {
    process.exit()
  })
  .catch((err) => {
    console.error(err)
  });

      // })
      // .then(() => {
      //   return Photos.bulkCreate(photoSeed)
      // })
      // .then(() => {
      //   return Reviews.bulkCreate(reviewSeed)
      // })
      // .then(() => {
      //   return UserTags.bulkCreate(userTagSeed)
      // })
      // .then(() => {
      //   return GamesTags.bulkCreate(gamesTagsSeed)
      // })
