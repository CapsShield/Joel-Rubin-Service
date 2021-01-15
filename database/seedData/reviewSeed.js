var faker = require('faker');

var reviews = [{ pos_neg: null, date: null, GameId: null }];

const seedReviews = (array) => {
  for (let i = 0; i < 100; i++) {
    array[i] = { pos_neg: null, date: null, GameId: null };
    var randomBool = faker.random.boolean();
    var randomDate = faker.date.past();
    var randomNum = faker.random.number({ min: 1, max: 100 });
    array[i].date = randomDate;
    array[i].pos_neg = randomBool;
    array[i].GameId = randomNum;
  };
};

seedReviews(reviews);

module.exports = reviews;