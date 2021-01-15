const faker = require('faker')

let reviews = [
  {
    pos_neg: true,
    date: Date.now(),
    GameId: 1
  }
];

const seedReviews = (array) => {

  for (let i = 0; i < 100; i++) {
    array[i] = { pos_neg: null, date: null, GameId: null }
    var randomBool = faker.random.boolean()
    var randomDate = faker.date.past()
    var randomNum = faker.random.number({ min: 1, max: 100 })
    array[i].date = randomDate
    array[i].pos_neg = randomBool
    array[i].GameId = randomNum
  }
}

seedReviews(reviews)
console.log(reviews)

module.exports = reviews