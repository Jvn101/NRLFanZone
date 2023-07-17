const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const teamSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
});


const Team = model('Team', teamSchema);

module.exports = Team;