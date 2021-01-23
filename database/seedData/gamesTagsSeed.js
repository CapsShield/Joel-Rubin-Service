const faker = require('faker');

let gamesTagsSeed = [
  {
    GameId: 1,
    UserTagId: 1
  },
  {
    GameId: 1,
    UserTagId: 2
  },
  {
    GameId: 1,
    UserTagId: 3
  },
  {
    GameId: 1,
    UserTagId: 4
  },
  {
    GameId: 1,
    UserTagId: 5
  },
]


const seedGamesTags = (array) => {
  for (let i = 5; i < 100; i++) {
    var randomGameId = faker.random.number({ min: 1, max: 100 });
    var randomTagId = faker.random.number({ min: 1, max: 100 });
    array[i] = { GameId: randomGameId, UserTagId: randomTagId };
  };
};

seedGamesTags(gamesTagsSeed);








module.exports = gamesTagsSeed;
