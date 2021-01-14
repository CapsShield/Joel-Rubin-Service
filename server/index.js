const express = require("express");
const app = express()
const port = 3000

app.use(express.static("public"))

app.use(express.urlencoded({
  extended: true
}))

app.listen(port, () => {
  console.log(`listening on localhost:${port}`)
})