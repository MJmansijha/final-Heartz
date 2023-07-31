// songsApi
const express = require('express');
const router = express.Router();
const Song = require('./static/models/songs'); // Assuming the correct path to the model

// Route to fetch all songs
router.get('/', async (req, res) => {
  try {
    const songs = await Song.find();
    res.json(songs);
  } catch (error) {
    console.error('Error fetching songs from the database:', error);
    res.status(500).json({ error: 'Failed to fetch songs from the database' });
  }
});

module.exports = router;
