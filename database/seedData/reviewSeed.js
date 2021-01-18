var faker = require('faker');

var reviews = [];

const seedReviews = (array) => {
  for (let i = 0; i < 100; i++) {
    var randomBool = faker.random.boolean();
    var randomDate = faker.date.past();
    var randomNum = faker.random.number({ min: 1, max: 100 });
    array[i] = { pos_neg: randomBool, date: randomDate, GameId: randomNum };
  };
};

seedReviews(reviews);

module.exports = reviews;
