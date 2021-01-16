const faker = require('faker');

let userTagSeed = [];

const seedUserTags = (array) => {
  for (let i = 0; i < 100; i++) {
    var randomTag = faker.hacker.adjective();
    array[i] = { tag: randomTag };
  };
};

seedUserTags(userTagSeed);

module.exports = userTagSeed;