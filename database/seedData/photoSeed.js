const faker = require('faker')

let photos = [
  { description: null, photoUrl: null, GameId: null }
];


const seedReviews = (array) => {

  for (let i = 0; i < 100; i++) {
    array[i] = { description: null, photoUrl: null, GameId: null }
    var randomDesc = faker.commerce.productDescription()
    var randomUrl = faker.image.imageUrl()
    var randomNum = faker.random.number({ min: 1, max: 100 })
    array[i].description = randomDesc
    array[i].photoUrl = randomUrl
    array[i].GameId = randomNum
  }
};

seedReviews(photos);

module.exports = photos;

