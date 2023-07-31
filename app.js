const express = require("express");
const path = require("path");
const app = express();
const themes = require('./themes');
const User = require('./static/models/userdb');
const port = 3000;
app.use(express.urlencoded({ extended: true }));
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
app.use('/register', (req, res) => {
  res.status(200).render('register');
});
app.post('/register', async (req, res) => {
  const { name, password } = req.body;

  try {
    // Create a new user using the User model
    const newUser = new User({ name, password });

    // Save the user to the database
    await newUser.save();

    res.redirect('/'); // Redirect to login
  } catch (err) {
    console.error('Error saving user:', err.message);
    res.status(500).send('Error registering user');
  }
});
app.use('/login', (req, res) => {
  res.status(200).render('login');
});
app.use('/home', (req, res) => {
  res.status(200).render('theme', { themes });
});
app.post('/login', async (req, res) => {
  const { name, password } = req.body;

  try {
    // Find the user in the database
    const user = await User.findOne({ name });

    if (!user) {
      return res.status(404).send('User not found');
    }

    // Check if the password matches
    if (user.password !== password) {
      return res.status(401).send('Invalid password');
    }

    // Successful login, you can implement session handling or JWT authentication here

    res.redirect('/home'); 
  } catch (err) {
    console.error('Error logging in:', err.message);
    res.status(500).send('Error logging in');
  }
});
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
app.use('/addthemes', (req, res) => {
  res.status(200).render('addtheme');
});
app.use('/addsongs', (req, res) => {
  res.status(200).render('addsong');
});
// Listen to the port
app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
