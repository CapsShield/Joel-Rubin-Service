const db = require("./index.js").sequelize
const { Games, GamesTags, Photos, Reviews, UserTags } = require('./index.js')

// name: {
//   type: Sequelize.STRING,
// },
// gameHeaderImageUrl: {
//   type: Sequelize.STRING,
// },
// gameSynopsis: {
//   type: Sequelize.STRING,
// },
// releaseDate: {
//   type: Sequelize.DATEONLY,
// },
// developer: {
//   type: Sequelize.STRING,
// },
// publisher: {

let gameSeed = [
  {
    name: 'Goldeneye',
    gameHeaderImageUrl: 'https://media.gettyimages.com/photos/irish-actor-pierce-brosnan-poses-in-the-hatch-of-a-russian-t55-main-picture-id126134312?k=6&m=126134312&s=612x612&w=0&h=ZPkHH-51vqVe8QbwNQ3RBXHaEmZjiUIzhyivOLxxEOI=',
    gameSynopsis: 'Based on the 1995 James Bond film GoldenEye, it features a single-player campaign in which players assume the role of British Secret Intelligence Service agent James Bond as he fights to prevent a criminal syndicate from using a satellite weapon against London to cause a global financial meltdown.',
    releaseDate: '25 Aug 1997',
    developer: 'Rare',
    publisher: 'Nintendo'

  }
]



db.sync({ force: true })
  .then(() => {
    console.log('Test Table Created')
    return Games.bulkCreate(gameSeed)
  })
  .then(() => {
    console.log('data added')
    return Test.findAll()
  })
  .then((tests) => {
    console.log(tests)
  })
  .then(() => {
    process.exit()
  })