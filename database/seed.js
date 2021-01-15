const Test = require("./index.js").Test
const db = require("./index.js").sequelize



const testData = [
  { info: 'A' },
  { info: 'B' },
  { info: 'C' }
]


// db.sync({ force: true })
//   .then(() => {
//     console.log('Test Table Created')
//     return Test.bulkCreate(testData)
//   })
//   .then(() => {
//     console.log('data added')
//     return Test.findAll()
//   })
//   .then((tests) => {
//     console.log(tests)
//   })
//   .then(() => {
//     process.exit()
//   })