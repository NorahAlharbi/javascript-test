const mongoose = require('mongoose');

// Our schema
const MusicSchema = new mongoose.Schema({
  NOTTHERIGHTATTRIBUTE: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  genre: {
    type: String,
    require: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Music', MusicSchema);