const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const app = express()
const Post = require('./posts/Post')

const port = 3001
app.set('trust proxy', '127.0.0.1')

mongoose.connect('mongodb://localhost/instagram-clone')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(require('./config/error-handler'))

'https://www.webwise.ie/wp-content/uploads/2014/04/Can-Instagram-Boost-Business-Sales.jpg' , caption : 'Mini Instagram'}




const server = app.listen(port, () => console.log(`🔥🔥🔥Running on port: ${port}`))

module.exports = server
