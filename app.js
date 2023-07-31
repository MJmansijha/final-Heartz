const express = require("express");
const path = require("path");
const app = express();
const themes = require('./themes');
const port = 3000;
const {
  BOLLYWOOD,
  ENGLISH,
  BHOJPURI,
  PUNJABI,
  ANIME,
  KPOP,
} = require('./static/models/songs');
// const themesData = require('./themes'); // Import the theme data object

const albumname = "Bollywood";
// Set the views directory and template engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'static')));

// Define routes for each theme
// render the template for each theme
app.use('/bollywood', (req, res) => {
  res.status(200).render('play', { songs: BOLLYWOOD, albumname });
});

app.use('/english', (req, res) => {
  res.status(200).render('play', { songs: ENGLISH, albumname });
});

app.use('/bhojpuri', (req, res) => {
  res.status(200).render('play', { songs: BHOJPURI, albumname });
});

app.use('/punjabi', (req, res) => {
  res.status(200).render('play', { songs: PUNJABI, albumname });
});

app.use('/kpop', (req, res) => {
  res.status(200).render('play', { songs: KPOP, albumname });
});

app.use('/anime', (req, res) => {
  res.status(200).render('play', { songs: ANIME, albumname });
});
app.use('/home', (req, res) => {
  res.status(200).render('theme', { themes });
});
app.use('/addthemes', (req, res) => {
  res.status(200).render('addtheme');
});
app.use('/addsongs', (req, res) => {
  res.status(200).render('addsong');
});
app.use('/register', (req, res) => {
  res.status(200).render('register');
});
app.use('/', (req, res) => {
  res.status(200).render('login');
});



// Define routes for other themes similarly...

// Listen to the port
app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
