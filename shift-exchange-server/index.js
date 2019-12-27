require('dotenv').config()

const cors = require('cors')
const express = require('express')
const app = express()
const Company = require('./models/company')


app.use(cors())

app.get('/', (req, res) => {
  res.send('<h1>Welcome to Shift-Exchange</h1>')
})

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server runnign on ${PORT}`)
})