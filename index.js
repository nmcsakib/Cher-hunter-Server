const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')
const chefDetails = require('./data/details.json')
app.use(cors())
app.get('/', (req, res) => {
    res.send('hello world')
})
app.get('/chef-details', (req, res) => {
    res.send(chefDetails)
})
app.listen(port)