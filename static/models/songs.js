// ./static/models/songs.js
const mongoose = require("mongoose");

const songSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  theme: {
    type: String,
    required: true,
  },
  releasedate: {
    type: String,
    required: true,
  },
  malesinger: {
    type: String,
    required: true,
  },
  femalesinger: {
    type: String,
    required: true,
  },
  audioUrl: {
    type: String,
    required: true,
  },
});

const SongInf = mongoose.model('SongInf', songSchema);
module.exports = SongInf;
