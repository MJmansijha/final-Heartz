// songsdb.js
const mongoose = require("mongoose");
const Song = require("./static/models/songs"); // Assuming the correct path to the model

// Sample data for BOLLYWOOD songs
const BOLLYWOOD = [
  { id: 1, name: "APNA BANALE", image: "songimg/bollywood/apnabanale.jpg", time: "05:00", theme: "BOLLYWOOD", releasedata: "", malesinger: "", femalesinger: "", audioUrl: "themesongs/bollywood/APNABANALE.mp3" },
  { id: 2, name: "Nazm Nazm", image: "songimg/bollywood/nazamnazam.jpeg", time: "05:00", theme: "BOLLYWOOD", releasedata: "", malesinger: "", femalesinger: "", audioUrl: "themesongs/bollywood/NazmNazm.mp3" },
  { id: 3, name: "Phir Bhi Tumko Chaahunga", image: "songimg/bollywood/phirbhitumkochaahunga.jpg", time: "05:00", theme: "BOLLYWOOD", releasedata: "", malesinger: "", femalesinger: "", audioUrl: "themesongs/bollywood/PhirBhiTumkoChaahunga.mp3" },
  { id: 4, name: "Tu Hai To Mujhe Fir Aur Kya Chahiye", image: "songimg/bollywood/PhirAurKyaChahiye.jpg", time: "05:00", theme: "BOLLYWOOD", releasedata: "", malesinger: "", femalesinger: "", audioUrl: "themesongs/bollywood/TuHaiToMujheFirAurKyaChahiye.mp3" },
  { id: 5, name: "Tum Hi Ho", image: "songimg/bollywood/tumhiho.jpg", time: "05:00", theme: "BOLLYWOOD", releasedata: "", malesinger: "", femalesinger: "", audioUrl: "themesongs/bollywood/TumHiHo.mp3" },
];
const ENGLISH = [
  { id: 1, name: "Back To December Taylors", image: "songimg/english/backtodecembertaylors.png", time: "05:00", theme: "ENGLISH", releasedata: "", malesinger: "", femalesinger: "", audioUrl: "themesongs/english/BackToDecemberTaylors.mp3" },
  { id: 2, name: "Olivia Rodrigo", image: "songimg/english/oliviarodrigo.jpeg", time: "05:00", theme: "ENGLISH", releasedata: "", malesinger: "", femalesinger: "", audioUrl: "themesongs/english/OliviaRodrigo.mp3" },
  { id: 3, name: "Taylor Swift  Cruel Summer", image: "songimg/english/cruelsummer.jpeg", time: "05:00", theme: "ENGLISH", releasedata: "", malesinger: "", femalesinger: "", audioUrl: "themesongs/english/TaylorSwiftCruelSummer.mp3" },
  { id: 4, name: "Taylor Swift  Style", image: "songimg/english/taylorswiftstyle.png", time: "05:00", theme: "ENGLISH", releasedata: "", malesinger: "", femalesinger: "", audioUrl: "themesongs/english/TaylorSwiftStyle.mp3" },
  { id: 5, name: "Taylor Swift  You Belong With Me", image: "songimg/english/youbelongwithme.png", time: "05:00", theme: "ENGLISH", releasedata: "", malesinger: "", femalesinger: "", audioUrl: "themesongs/english/englishMe.mp3" },
];
const BHOJPURI = [
  { id: 1, name: "52 GAJ KA DAMAN", image: "songimg/bhojpuri/52GAJKADAMAN.jpeg", time: "05:00", theme: "BHOJPURI", releasedata: "", malesinger: "", femalesinger: "", audioUrl: "themesongs/bhojpuri/52GAJKADAMAN.mp3" },
  { id: 2, name: "chunni mein chunni mein", image: "songimg/bhojpuri/chunnimeinchunnimein.jpg", time: "05:00", theme: "BHOJPURI", releasedata: "", malesinger: "", femalesinger: "", audioUrl: "themesongs/bhojpuri/chunnimeinchunnimein.mp3" },
  { id: 3, name: "GYPSY Balam Thanedar", image: "songimg/bhojpuri/GYPSYBalamThanedar.jpeg", time: "05:00", theme: "BHOJPURI", releasedata: "", malesinger: "", femalesinger: "", audioUrl: "themesongs/bhojpuri/GYPSYBalamThanedar.mp3" },
  { id: 4, name: "Lollypop Lagelu", image: "songimg/bhojpuri/LollypopLagelu.jpg", time: "05:00", theme: "BHOJPURI", releasedata: "", malesinger: "", femalesinger: "", audioUrl: "themesongs/bhojpuri/LollypopLagelu.mp3" },
  { id: 5, name: "Teri Aakhya Ka Yo Kajal", image: "songimg/bhojpuri/TeriAakhyaKaYoKajal.jpg", time: "05:00", theme: "BHOJPURI", releasedata: "", malesinger: "", femalesinger: "", audioUrl: "themesongs/bhojpuri/TeriAakhyaKaYoKajal.mp3" },
];
const PUNJABI = [
  { id: 1, name: "Blue Eyes  Yo Yo Honey Singh", image: "songimg/punjabi/BlueEyesYoYoHoneySingh.jpeg", time: "05:00", theme: "PUNJABI", releasedata: "", malesinger: "", femalesinger: "", audioUrl: "/themesongs/punjabi/BlueEyesYoYoHoneySingh.mp3" },
  { id: 2, name: "BROWN MUNDE AP DHILLON  GURINDER GILL  SHINDA KAHLON", image: "songimg/punjabi/BROWNMUNDE.jpg", time: "05:00", theme: "PUNJABI", releasedata: "", malesinger: "", femalesinger: "", audioUrl: "/themesongs/punjabi/BROWNMUNDEAPDHILLONGURINDERGILLSHINDAKAHLON.mp3" },
  { id: 3, name: "Diljit Dosanjh  GOAT", image: "songimg/punjabi/DiljitDosanjhGOAT.jpg", time: "05:00", theme: "PUNJABI", releasedata: "", malesinger: "", femalesinger: "", audioUrl: "/themesongs/punjabi/DiljitDosanjhGOAT.mp3" },
  { id: 4, name: "Harrdy Sandhu  Kya Baat Ay  Jaani  B Praak   Arvindr Khaira", image: "songimg/punjabi/HarrdySandhuKyaBaat.jpeg", time: "05:00", theme: "PUNJABI", releasedata: "", malesinger: "", femalesinger: "", audioUrl: "/themesongs/punjabi/HarrdySandhuKyaBaatAyJaaniBPraakArvindrKhaira.mp3" },
  { id: 5, name: "OLD SKOOL Full Video Prem Dhillon ft Sidhu Moose Wala NseebRahul Chahal", image: "songimg/songimg/anime/", time: "05:00", theme: "PUNJABI", releasedata: "", malesinger: "", femalesinger: "", audioUrl: "/themesongs/punjabi/OLDSKOOLFullVideoPremDhillonftSidhuMooseWalaNseebRahulChahal.mp3" },
];
const ANIME = [
  { id: 1, name: "Blue Bird", image: "songimg/anime/BlueBird.jpeg", time: "05:00", theme: "ANIME", releasedata: "", malesinger: "", femalesinger: "", audioUrl: "/themesongs/anime/BlueBird.mp3" },
  { id: 2, name: "Dream lantern", image: "songimg/anime/Dreamlantern.jpeg", time: "05:00", theme: "ANIME", releasedata: "", malesinger: "", femalesinger: "", audioUrl: "/themesongs/anime/Dreamlantern.mp3" },
  { id: 3, name: "nandemonaiya", image: "songimg/anime/Dreamlantern.jpeg", time: "05:00", theme: "ANIME", releasedata: "", malesinger: "", femalesinger: "", audioUrl: "/themesongs/anime/nandemonaiya.mp3" },
  { id: 4, name: "RADWIMPS", image: "songimg/anime/Dreamlantern.jpeg", time: "05:00", theme: "ANIME", releasedata: "", malesinger: "", femalesinger: "", audioUrl: "/themesongs/anime/RADWIMPS.mp3" },
  { id: 5, name: "Yoko Hikasa", image: "songimg/anime/Yoko Hikasa.jpeg", time: "05:00", theme: "ANIME", releasedata: "", malesinger: "", femalesinger: "", audioUrl: "/themesongs/anime/YokoHikasa.mp3" },
];
const KPOP = [
  { id: 1, name: "ATEEZ에이티즈  멋The Real 흥  興", image: "songimg/kpop/thereal.jpg", time: "05:00", theme: "KPOP", releasedata: "", malesinger: "", femalesinger: "", audioUrl: "/themesongs/kpop/ATEEZ에이티즈멋TheReal흥興.mp3" },
  { id: 2, name: "BLACKPINK  Kill This Love MV", image: "songimg/kpop/KillThisLove.jpg", time: "05:00", theme: "KPOP", releasedata: "", malesinger: "", femalesinger: "", audioUrl: "/themesongs/kpop/BLACKPINKKillThisLoveMV.mp3" },
  { id: 3, name: "BTS Black Swan Official MV", image: "songimg/kpop/blackswan.jpg", time: "05:00", theme: "KPOP", releasedata: "", malesinger: "", femalesinger: "", audioUrl: "/themesongs/kpop/BTSBlackSwanOfficialMV.mp3" },
  { id: 4, name: "Fifty Fifty  Cupid Twin", image: "songimg/kpop/cupid.png", time: "05:00", theme: "KPOP", releasedata: "", malesinger: "", femalesinger: "", audioUrl: "/themesongs/kpop/FiftyFiftyCupidTwin.mp3" },
  { id: 5, name: "Growl MV Korean Ver", image: "songimg/kpop/GrowlMVKoreanVer.jpg", time: "05:00", theme: "KPOP", releasedata: "", malesinger: "", femalesinger: "", audioUrl: "/themesongs/kpop/GrowlMVKoreanVer.mp3" },
];

// Save songs data to the database for a specific theme
async function seedSongsByTheme(theme, data) {
    try {
      await Song.deleteMany({ theme }); // Remove existing songs for the theme from the database
      const insertedSongs = await Song.insertMany(data); // Insert new songs data
      console.log(`${theme} songs have been saved to the database:`, insertedSongs);
    } catch (err) {
      console.error(`Error seeding ${theme} songs:`, err);
    }
  }
  
  // Connect to the database and seed songs data for all themes
  mongoose.connect("mongodb://localhost:27017/Heartz", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(async () => {
      console.log('Connected to MongoDB');
  
      // Seed data for each theme
      await seedSongsByTheme("BOLLYWOOD", BOLLYWOOD);
      await seedSongsByTheme("ENGLISH", ENGLISH);
      await seedSongsByTheme("BHOJPURI", BHOJPURI);
      await seedSongsByTheme("PUNJABI", PUNJABI);
      await seedSongsByTheme("ANIME", ANIME);
      await seedSongsByTheme("KPOP", KPOP);
  
      console.log('All themes songs have been successfully saved to the database');
    })
    .catch((err) => console.error('Error connecting to MongoDB:', err));
  