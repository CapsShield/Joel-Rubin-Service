const faker = require('faker')

let userTagSeed = [
  {
    tag: "single-player"
  }
];

const seedUserTags = (array) => {

  for (let i = 0; i < 100; i++) {
    array[i] = { tag: null }
    var randomTag = faker.hacker.adjective()
    array[i].tag = randomTag

  }

}

seedUserTags(userTagSeed)
console.log("userTagSeed:", userTagSeed)







module.exports = userTagSeed