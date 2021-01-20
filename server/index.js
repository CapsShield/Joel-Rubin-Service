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
    res.status(200).send(results)
  })
    .catch((err) => {
      res.status(404).send(err)
    })
})

app.get('/api/games/:id/game', (req, res) => {
  let id = req.params.id
  console.log(id)
  Games.findByPk(id)
    .then((result) => {
      res.status(200).send(result)
    })
    .catch((err) => {
      res.status(404).send(err)
    })
})

db.sync()
  .then(() => {
    app.listen(port, () => {
      console.log(`listening on localhost:${port}`)
    })
  })
  .catch((err) => {
    res.status(404).send(err)
  })


