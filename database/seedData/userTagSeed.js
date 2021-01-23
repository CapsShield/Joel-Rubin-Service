const faker = require('faker');

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

const seedUserTags = (array) => {
  for (let i = 5; i < 100; i++) {
    var randomTag = faker.hacker.adjective();
    array[i] = { tag: randomTag };
  };
};

seedUserTags(userTagSeed);



module.exports = userTagSeed;
