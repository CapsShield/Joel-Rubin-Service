var faker = require('faker');

let gameSeed = [];

const seedGames = (array) => {

  for (let i = 0; i < 100; i++) {
    var randomGame = faker.commerce.productName();
    var randomGameHeaderImgUrl = faker.image.imageUrl();
    var randomGameSynopsis = faker.commerce.productDescription();
    var randomReleaseDate = faker.date.past();
    var randomDev = faker.company.companyName();
    var randomPublisher = faker.company.companyName();
    array[i] = { name: randomGame, gameHeaderImageUrl: randomGameHeaderImgUrl, gameSynopsis: randomGameSynopsis, releaseDate: randomReleaseDate, developer: randomDev, publisher: randomPublisher };
  }
};

seedGames(gameSeed);

module.exports = gameSeed;
console.log(gameSeed)
