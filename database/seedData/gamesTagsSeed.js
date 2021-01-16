const faker = require('faker');

const gamesTagsSeed = [];


const seedGamesTags = (array) => {
  for (let i = 0; i < 100; i++) {
    var randomGameId = faker.random.number({ min: 1, max: 100 });
    var randomTagId = faker.random.number({ min: 1, max: 100 });
    array[i] = { GameId: randomGameId, UserTagId: randomTagId };
  };
};

seedGamesTags(gamesTagsSeed);







module.exports = gamesTagsSeed;
