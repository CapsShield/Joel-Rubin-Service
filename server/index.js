const express = require('express')
const app = express()
const db = require('../database').sequelize
const { Games, GamesTags, Photos, Reviews, UserTags } = require('../database')
const port = 3000

app.use(express.static('public'))

app.use(express.urlencoded({
  extended: true
}))

app.get('/api/games/:id/photo', (req, res) => {
  let id = req.params.id
  Photos.findAll({
    where: {
      GameId: id
    }
  }).then((results) => {
    res.send(results)
  })
})

app.get('/api/games/:id/game', (req, res) => {
  let id = req.params.id
  console.log(id)
  Games.findByPk(id)
    .then((result) => {
      res.send(result)
    })
})

db.sync().then(() => {
  app.listen(port, () => {
    console.log(`listening on localhost:${port}`)
  })
})


