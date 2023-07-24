const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const postSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  team: {
    type: Schema.Types.ObjectId,
      ref: "Team",
      required: true,
  }
});



const Post = model('Post', postSchema);

module.exports = Post;