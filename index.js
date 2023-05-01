const express = require('express')
const app = express()
const cors = require('cors')

const chefData = require('./data/data.json')

const port = process.env.PORT || 5000

app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello from the server')
})

app.get('/chefs', (req, res) => {
    res.send(chefData)
})

app.listen(port, () => {
    console.log('Server is running on port', port)
})