const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const teamSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  description: {
    type: String,
    trim: true
  },
  imgUrl: {
    type: String,
    trim: true
  }
});


const Team = model('Team', teamSchema);

module.exports = Team;