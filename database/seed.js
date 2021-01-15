const { Games, GamesTags, Photos, Reviews, UserTags } = require('./index.js');
const { gameSeed, gamesTagsSeed, photoSeed, reviewSeed, userTagSeed } = require('./seedData/index.js')
const Sequelize = require("sequelize")
const sequelize = new Sequelize('vapor', 'root', null, {
  host: 'localhost', dialect: 'mysql'
});



return sequelize.sync({ force: true }).then(() => {
  console.log("synced")
})
  .then(() => {
    return Games.bulkCreate(gameSeed)
  })
  .then(() => {
    return Photos.bulkCreate(photoSeed)
  })
  .then(() => {
    console.log('Reviews Table Created')
    return Reviews.bulkCreate(reviewSeed)
  })
  .then(() => {
    console.log('UserTags Table Created')
    return UserTags.bulkCreate(userTagSeed)
  })
  .then(() => {
    console.log('GamesTags Table Created')
    return GamesTags.bulkCreate(gamesTagsSeed)
  })
  .then(() => {
    process.exit()
  })
  .catch((err) => {
    console.error(err)
  });



  // const testSeed = {
    //   game: [
    //     {
    //       name: 'Goldeneye',
    //       gameHeaderImageUrl: 'https://media.gettyimages.com/photos/irish-actor-pierce-brosnan-poses-in-the-hatch-of-a-russian-t55-main-picture-id126134312?k=6&m=126134312&s=612x612&w=0&h=ZPkHH-51vqVe8QbwNQ3RBXHaEmZjiUIzhyivOLxxEOI=',
    //       gameSynopsis: 'GoldenEye 007 is a 1997 first-person shooter developed by Rare and published by Nintendo for the Nintendo 64.',
    //       releaseDate: '25 Aug 1997',
    //       developer: 'Rare',
    //       publisher: 'Nintendo'
    //     }
    //   ],
    //   gamesTags: [
    //     {
    //       GameId: 1,
    //       UserTagId: 1
    //     }
    //   ],
    //   photos: [
    //     {
    //       description: 'a photo',
    //       photoUrl: 'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
    //       GameId: 1
    //     }
    //   ],
    //   reviews: [
    //     {
    //       pos_neg: true,
    //       date: Date.now(),
    //       GameId: 1
    //     }
    //   ],
    //   userTags: [
    //     {
    //       tag: "single-player"
    //     }
    //   ]
    // };