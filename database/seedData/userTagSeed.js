const faker = require('faker');

// let userTagSeed = [];

const seedUserTags = (array) => {
  for (let i = 0; i < 100; i++) {
    var randomTag = faker.hacker.adjective();
    array[i] = { tag: randomTag };
  };
};

// seedUserTags(userTagSeed);

let userTagSeed = [
  {
    tag: "Puzzle"
  },
  {
    tag: "First-Person"
  },
  {
    tag: "Indie"
  },
  {
    tag: "Surreal"
  },
  {
    tag: "Exploration"
  },
]

module.exports = userTagSeed;
console.log(userTagSeed)