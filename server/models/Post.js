const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const postSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
    unique: true,
  },
});



const Post = model('Post', postSchema);

module.exports = Post;