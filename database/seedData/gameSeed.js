var faker = require('faker');

let gameSeed = [
  { name: null, gameHeaderImageUrl: null, gameSynopsis: null, releaseDate: null, developer: null, publisher: null }
];

const seedGames = (array) => {

  for (let i = 0; i < 100; i++) {
    array[i] = { name: null, gameHeaderImageUrl: null, gameSynopsis: null, releaseDate: null, developer: null, publisher: null };
    var randomGame = faker.commerce.productName();
    var randomGameHeaderImgUrl = faker.image.imageUrl();
    var randomGameSynopsis = faker.commerce.productDescription();
    var randomReleaseDate = faker.date.past();
    var randomDev = faker.company.companyName();
    var randomPublisher = faker.company.companyName();
    array[i].name = randomGame;
    array[i].gameHeaderImageUrl = randomGameHeaderImgUrl;
    array[i].gameSynopsis = randomGameSynopsis;
    array[i].releaseDate = randomReleaseDate;
    array[i].developer = randomDev;
    array[i].publisher = randomPublisher;
  }
};

seedGames(gameSeed);

module.exports = gameSeed;
