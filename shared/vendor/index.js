const path = require('path')
const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())

app.use(express.static(path.join(__dirname, '..', 'vendor')))

app.listen(2000)
