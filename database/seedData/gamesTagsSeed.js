const faker = require('faker');
const gameSeed = require('./gameSeed.js')

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
  for (let i = 2; i < gameSeed.length; i++) {
    let nums = []
    for (let k = 1; k < 101; k++) {
      nums.push(k)
    }
    nums = faker.helpers.shuffle(nums)
    nums = nums.slice(0, 5)
    for (let j = 0; j < 5; j++) {
      var randomGameId = i
      var randomTag = nums[j]
      array.push({ GameId: randomGameId, UserTagId: randomTag })
    }
  }
}



seedGamesTags(gamesTagsSeed);






module.exports = gamesTagsSeed;
console.log(gamesTagsSeed)