const faker = require('faker')

const gameSeed = require('./gameSeed.js')
const gamesTagsSeed = require('./gamesTagsSeed.js')
const photoSeed = require('./photoSeed.js')
const reviewSeed = require('./reviewSeed.js')
const userTagSeed = require('./userTagSeed.js')

export.modules = {
  gameSeed, gamesTagsSeed, photoSeed, reviewSeed, userTagSeed
}