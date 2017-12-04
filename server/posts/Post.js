// A post should follow this format:

// {
//   title: 'Dogs rule',
//   img: 'https://dog.jpg',
//   caption: 'this is a picture of my dog in action!
// }

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Post = new Schema({
  title: String,
  img: String,
  caption: String
})

module.exports = mongoose.model('Post', Post)