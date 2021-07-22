const MongoClient = require('mongodb').MongoClient
const server = require('express')()

MongoClient.connect(
  `mongodb://${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/${MONGO_DATABASE}`,
  function (err, db) {
    if (err) {
      throw err
    }
    console.log(`%cMONGO CONNECTED`, 'color:yellow')
  }
)

server.get('/', (req, res) => {
  res.sendStatus(200)
})

server.listen(process.env.SERVER_PORT, () =>
  console.log(`%cServer is on port ${process.env.SERVER_PORT}`, 'color:yellow')
)
