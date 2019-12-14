require('dotenv').config()
const express = require('express')
const app = express()
const Company = require('./models/company')

app.get('/', (req, res) => {
  res.send('<h1>Welcome to Shift-Exchange</h1>')
})

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server runnign on ${PORT}`)
})