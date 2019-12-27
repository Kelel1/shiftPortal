const mongoose = require('mongoose')

const url = process.env.MONGODB_URI

console.log('connecting to', url)

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(result => {
        console.log('connected to MongoDB')
    })
    .catch((error) => {
        console.log('error connecting to MongoDB:', error.message)
    })

const companySchema = new mongoose.Schema({
    name: String,
    address: String,
    employeeCount: Number
})

module.exports = mongoose.model('Company', companySchema)