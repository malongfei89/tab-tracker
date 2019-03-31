const express = require('express')
const bodyparser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const { sequelize } = require('./models')
const config = require('./config/config')
const users = require('./routes')
const app = express()

app.use(morgan('combined'))
app.use(bodyparser.json())
app.use(cors())

users(app)

sequelize.sync()
  .then(() => {
    app.listen(config.port)
    console.log(`server started on port ${config.port}`)
  })
