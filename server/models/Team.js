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
    ]
});


const Team = model('Team', teamSchema);

module.exports = Team;