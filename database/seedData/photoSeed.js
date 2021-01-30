const faker = require('faker');
const gameSeed = require('./gameSeed.js')

let photos = [
  {
    description: 'antichamber photo', photoUrl: 'https://steamcdn-a.akamaihd.net/steam/apps/219890/ss_c02435ac01bff1e3af6c69e9ddeb77f6bf40caf2.600x338.jpg?t=1525832559', GameId: 1
  },
  {
    description: 'antichamber photo', photoUrl: 'https://steamcdn-a.akamaihd.net/steam/apps/219890/ss_8604088893b9d0ea42d41c741619e740e92fcee0.600x338.jpg?t=1525832559', GameId: 1
  },
  {
    description: 'antichamber photo', photoUrl: 'https://steamcdn-a.akamaihd.net/steam/apps/219890/ss_fe2278241777765a73f5cc1567c17307d92ec6bb.600x338.jpg?t=1525832559', GameId: 1
  },
  {
    description: 'antichamber photo', photoUrl: 'https://steamcdn-a.akamaihd.net/steam/apps/219890/ss_62a1e3085fee312cf6c1025ec89018fa98821d99.600x338.jpg?t=1525832559', GameId: 1
  },
  {
    description: 'antichamber photo', photoUrl: 'https://steamcdn-a.akamaihd.net/steam/apps/219890/ss_1bf5f04ea4ffb1aaf3e77bef5e31793486f789ae.600x338.jpg?t=1525832559', GameId: 1
  },
  {
    description: 'antichamber photo', photoUrl: 'https://steamcdn-a.akamaihd.net/steam/apps/219890/ss_aa83543c053ccc413d8b7b5389bffb845ae84068.600x338.jpg?t=1525832559', GameId: 1
  },
  {
    description: 'antichamber photo', photoUrl: 'https://steamcdn-a.akamaihd.net/steam/apps/219890/ss_167e0de7713d2d1d8ee613ef078af986fb3212ef.600x338.jpg?t=1525832559', GameId: 1
  },
  {
    description: 'antichamber photo', photoUrl: 'https://steamcdn-a.akamaihd.net/steam/apps/219890/ss_459f60bad31ce52596e9a7c01e39bbfd9ee7daa6.600x338.jpg?t=1525832559', GameId: 1
  },
  {
    description: 'antichamber photo', photoUrl: 'https://steamcdn-a.akamaihd.net/steam/apps/219890/ss_4072c2f1de75d8abe76cbf328fa4b41adce27e0c.600x338.jpg?t=1525832559', GameId: 1
  },
  {
    description: 'antichamber photo', photoUrl: 'https://steamcdn-a.akamaihd.net/steam/apps/219890/ss_a3b3678597f075e22b347d70ab546e81e5a570c3.600x338.jpg?t=1525832559', GameId: 1
  },
]


const seedPhotos = (array) => {

  for (let i = 1; i < gameSeed.length; i++) {
    let randomNum = faker.random.number({ min: 5, max: 10 })
    for (let j = 0; j < randomNum; j++) {
      var randomDesc = faker.commerce.productDescription();
      var randomUrl = faker.image.imageUrl();
      array.push({ description: randomDesc, photoUrl: randomUrl, GameId: i + 1 })
    }
  }
}


seedPhotos(photos);

module.exports = photos;


