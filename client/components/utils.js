let gameSeed = [
  {
    name: 'Antichamber',
    gameHeaderImageUrl: 'https://steamcdn-a.akamaihd.net/steam/apps/219890/header.jpg?t=1525832559',
    gameSynopsis: 'Antichamber is a mind-bending psychological exploration game where nothing can be taken for granted. Discover an Escher-like world where hallways wrap around upon each other, spaces reconfigure themselves, and accomplishing the impossible may just be the only way forward.',
    releaseDate: '01/31/2013',
    developer: 'Alexander Bruce',
    publisher: 'Demruth'
  }
]

let photos = [
  {
    id: 1,
    description: "antichamber photo",
    photoUrl: "https://steamcdn-a.akamaihd.net/steam/apps/219890/ss_c02435ac01bff1e3af6c69e9ddeb77f6bf40caf2.1920x1080.jpg?t=1525832559",
    GameId: 1
  }

];

let reviews =
  [
    {
      id: 559,
      pos_neg: true,
      date: "2021-01-25",
      GameId: 1
    },

  ]

let recentReviews =
  [
    {
      id: 559,
      pos_neg: true,
      date: "2021-01-25",
      GameId: 1
    },

  ];

let userTags =

  [
    {
      id: 1,
      tag: "Puzzle"
    },

  ]

module.exports = {

  gameSeed, photos, recentReviews, reviews, userTags
}