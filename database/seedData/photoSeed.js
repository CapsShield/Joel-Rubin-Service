const faker = require('faker');

let photos = [];


const seedReviews = (array) => {

  for (let i = 0; i < 100; i++) {
    var randomDesc = faker.commerce.productDescription();
    var randomUrl = faker.image.imageUrl();
    var randomNum = faker.random.number({ min: 1, max: 10 });
    array[i] = { description: randomDesc, photoUrl: randomUrl, GameId: randomNum };
  };
};

seedReviews(photos);

module.exports = photos;

