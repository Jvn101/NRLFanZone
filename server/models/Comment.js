const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const commentSchema = new Schema({
  description: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  author: {
    type: Schema.Types.ObjectId,
      ref: "User",
  }
});


const Comment = model('Comment', commentSchema);

module.exports = Comment;