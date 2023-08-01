const express = require("express");
const path = require("path");
const app = express();
const User = require('./static/models/userdb');
const ThemeInf = require('./static/models/themes');
const SongInf = require('./static/models/songs');
const port = 3000;
const bodyParser = require('body-parser');

app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

const {
  BOLLYWOOD,
  ENGLISH,
  BHOJPURI,
  PUNJABI,
  ANIME,
  KPOP,
} = require('./static/models/songs');

const albumname = "";

// Set the views directory and template engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'static')));

app.get('/register', (req, res) => {
  res.status(200).render('register');
});

app.get('/', (req, res) => {
  res.status(200).render('login');
});

app.post('/register', async (req, res) => {
  const { name, password } = req.body;

  try {
    const newUser = new User({ name, password });
    await newUser.save();
    res.redirect('/');
  } catch (err) {
    console.error('Error saving user:', err.message);
    res.status(500).send('Error registering user');
  }
});

app.get('/home', async (req, res) => {
  try {
    const themesData = await ThemeInf.find();
    res.status(200).render('theme', { themes: themesData });
  } catch (err) {
    console.error('Error fetching themes:', err.message);
    res.status(500).send('Error fetching themes');
  }
});

app.post('/login', async (req, res) => {
  const { name, password } = req.body;

  try {
    const user = await User.findOne({ name });

    if (!user) {
      return res.status(404).send('User not found');
    }

    if (user.password !== password) {
      return res.status(401).send('Invalid password');
    }

    res.redirect('/home');
  } catch (err) {
    console.error('Error logging in:', err.message);
    res.status(500).send('Error logging in');
  }
});
// app.get('/BOLLYWOOD', (req, res) => {
//   res.status(200).render('play', { songs: BOLLYWOOD, albumname });
// });

app.get('/:theme', async (req, res) => {
  const themeName = req.params.theme;    //english
  await renderThemePage(req, res, themeName);
});

async function renderThemePage(req, res, themeName) {
  try {
    // Modify the theme name to use the actual link from the database
    const themeData = await ThemeInf.findOne({ link: themeName });

    if (!themeData) {
      // Theme not found, handle the error as needed
      res.status(404).send('Theme not found');
      return;
    }

    // Render the play page with the theme data from the database
    res.status(200).render('play', { songs: themeData, albumname: themeData.name });
  } catch (err) {
    console.error('Error fetching theme data:', err.message);
    res.status(500).send('Error fetching theme data');
  }
}


// app.get('/bollywood', (req, res) => {
//   res.status(200).render('play', { songs: BOLLYWOOD, albumname });
// });

// app.get('/english', (req, res) => {
//   res.status(200).render('play', { songs: ENGLISH, albumname });
// });

// app.get('/bhojpuri', (req, res) => {
//   res.status(200).render('play', { songs: BHOJPURI, albumname });
// });

// app.get('/punjabi', (req, res) => {
//   res.status(200).render('play', { songs: PUNJABI, albumname });
// });

// app.get('/kpop', (req, res) => {
//   res.status(200).render('play', { songs: KPOP, albumname });
// });

// app.get('/anime', (req, res) => {
//   res.status(200).render('play', { songs: ANIME, albumname });
// });

app.get('/addthemes', (req, res) => {
  res.status(200).render('addtheme');
});

app.post('/addthemes', async (req, res) => {
  try {
    const { name, image, link } = req.body;
    const newTheme = new ThemeInf({ name, image, link });
    await newTheme.save();
    res.redirect('/home'); 
  } catch (err) {
    console.error('Error saving theme:', err.message);
    res.status(500).send('Error saving theme');
  }
8});

app.get('/addsongs', (req, res) => {
  res.status(200).render('addsong');
});// Route to handle form submission and add a new song to the database
app.post("/addsongs0", (req, res) => {
  // Extract song data from the request body
  const { id, name, image, time, songtheme, songreleasedate, malesinger, femalesinger, audiourl } = req.body;

  // Create a new SongInf document using the SongInf model
  const newSong = new SongInf({
    id,
    name,
    image,
    time,
    theme: songtheme, // Use 'theme' property instead of 'songtheme'
    releasedate: songreleasedate, // Use 'releasedate' property instead of 'song released date'
    malesinger,
    femalesinger,
    audioUrl: audiourl,
  });

  // Save the new song to the database
  newSong.save()
    .then(() => {
      console.log("New song added to the database:", newSong);
      // Redirect back to the addsongs page or any other page as needed
      res.redirect("/home");
    })
    .catch((err) => {
      console.error("Error adding song to the database:", err.message);
      // Handle the error as needed (e.g., show an error message on the page)
      res.status(500).send("Error adding song to the database");
    });
});


// Listen to the port
app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
