var faker = require('faker');


let gameSeed = [
  {
    name: 'Antichamber',
    gameHeaderImageUrl: 'https://steamcdn-a.akamaihd.net/steam/apps/219890/header.jpg?t=1525832559',
    gameSynopsis: 'Antichamber is a mind-bending psychological exploration game where nothing can be taken for granted. Discover an Escher-like world where hallways wrap around upon each other, spaces reconfigure themselves, and accomplishing the impossible may just be the only way forward.',
    releaseDate: '01/31/2013',
    developer: 'Alexander Bruce',
    publisher: 'Demruth'
  }
]

const seedGames = (array) => {

  for (let i = 1; i < 100; i++) {
    var randomGame = faker.commerce.productName();
    var randomGameHeaderImgUrl = faker.image.imageUrl();
    var randomGameSynopsis = faker.commerce.productDescription();
    var randomReleaseDate = faker.date.past();
    var randomDev = faker.company.companyName();
    var randomPublisher = faker.company.companyName();
    array[i] = { name: randomGame, gameHeaderImageUrl: randomGameHeaderImgUrl, gameSynopsis: randomGameSynopsis, releaseDate: randomReleaseDate, developer: randomDev, publisher: randomPublisher };
  }
};


// seedGames(gameSeed);

module.exports = gameSeed;
console.log(gameSeed)
