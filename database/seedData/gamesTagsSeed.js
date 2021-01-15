const faker = require('faker');

const gamesTagsSeed = [
  {
    GameId: 1,
    UserTagId: 1,
  },
];


const seedGamesTags = (array) => {
  for (let i = 0; i < 100; i++) {
    array[i] = { GameId: null, UserTagId: null };
    var randomGameId = faker.random.number({ min: 1, max: 100 });
    var randomTagId = faker.random.number({ min: 1, max: 100 });
    array[i].GameId = randomGameId;
    array[i].UserTagId = randomTagId;

  };
};

seedGamesTags(gamesTagsSeed);







module.exports = gamesTagsSeed;
