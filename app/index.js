const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

require('dotenv').config()

require('./db/postgres')

const test = require('./test/router')

const port = process.env.PORT || 31415

const app = express()

app.use(bodyParser.json())
app.use(cors())

app.use('/test', test)
app.get('/', (req, res, next) => res.send('Hello World!'))

app.use((error, req, res, next) => {
    if (error.status) {
        res.send(error)
    } else {
        let answer = new Error()
        answer.message = 'Uncaught exeption!'
        res.status(500).send(answer)
    }
})

app.listen(process.env.PORT, () => console.log(`Example app listening on port ${port}!`))
