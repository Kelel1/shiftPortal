const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('<h1>Welcome to Shift-Exchange</h1>')
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server runnign on ${PORT}`)
})