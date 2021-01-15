const faker = require('faker');

let userTagSeed = [{ tag: null }];

const seedUserTags = (array) => {
  for (let i = 0; i < 100; i++) {
    array[i] = { tag: null }
    var randomTag = faker.hacker.adjective()
    array[i].tag = randomTag
  }
};

seedUserTags(userTagSeed);

module.exports = userTagSeed;