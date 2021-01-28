require('dotenv').config();
const express = require('express')
const compression = require('compression');
const app = express()
const { Op } = require('sequelize')
const moment = require('moment')
const { Games, GamesTags, Photos, Reviews, UserTags } = require('../database/models/index.js')

const port = process.env.PORT;

app.use(compression())
app.use(express.static('public'))


app.use(express.urlencoded({
  extended: true
}))

app.get('/api/games/:id/photo', (req, res) => {
  let id = req.params.id
  console.log("request received")
  Photos.findAll({
    where: {
      GameId: id
    }
  }).then((results) => {
    res.status(200).send(results)
  })
    .catch((err) => {
      res.status(404).send(err)
    })
})

app.get('/api/games/:id/game', (req, res) => {
  let id = req.params.id
  Games.findByPk(id)
    .then((result) => {
      res.status(200).send(result)
    })
    .catch((err) => {
      res.status(404).send(err)
    })
})


// get all reviews sorted in desc order //

app.get('/api/games/:id/reviews', (req, res) => {
  let id = req.params.id
  Reviews.findAll({
    where: {
      GameId: id
    },
    order: [
      ['date', 'DESC'],
    ],
  })
    .then((result) => {
      res.status(200).send(result)
    })
})

//only get reviews from last 30 days //

app.get('/api/games/:id/recentReviews', (req, res) => {
  let id = req.params.id;
  Reviews.findAll({
    where: {
      date: {
        [Op.gte]: moment().subtract(30, 'days').toDate()
      }
    }
  })
    .then((result) => {
      res.status(200).send(result)
    })
})

app.get('/api/games/:id/userTags', (req, res) => {
  let id = req.params.id;
  UserTags.findAll({
    include: {
      model: Games,
      attributes: [],
      where: {
        id: id
      }
    },
  }).then((result) => {
    res.status(200).send(result)
  })
})



app.listen(port, () => {
  console.log(`listening on localhost:${port}`)
})



