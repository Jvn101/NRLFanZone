const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const teamSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  teamusers: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User'
      }
    ],
  fanPost: [
      {
        type: Schema.Types.ObjectId,
        ref: 'fanPost'
      }
    ],
    comments: [
      {
        commentText: {
          type: String,
          required: true,
          minlength: 1,
          maxlength: 280,
        },
        commentAuthor: {
          type: String,
          required: true,
        },
        createdAt: {
          type: Date,
          default: Date.now,
          get: (timestamp) => dateFormat(timestamp),
        },
      },
    ],
    
});


const Team = model('Team', teamSchema);

module.exports = Team;