// songs.js
// song db schema and data
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

const Song = new mongoose.model('Song', songSchema);

// Data of songs
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
  { id: 2, name: "BROWN MUNDE AP DHILLON", image: "songimg/punjabi/BROWN MUNDE APDHILLON.jpeg", time: "05:00", theme: "PUNJABI", releasedata: "", malesinger: "", femalesinger: "", audioUrl: "themesongs/punjabi/BROWN MUNDE APDHILLON.mp3" },
  { id: 3, name: "Coka  Sukh-E", image: "songimg/punjabi/CokaSukhE.jpg", time: "05:00", theme: "PUNJABI", releasedata: "", malesinger: "", femalesinger: "", audioUrl: "themesongs/punjabi/CokaSukhE.mp3" },
  { id: 4, name: "I Like It  Cardi B", image: "songimg/punjabi/ILikeItCardiB.jpeg", time: "05:00", theme: "PUNJABI", releasedata: "", malesinger: "", femalesinger: "", audioUrl: "themesongs/punjabi/ILikeItCardiB.mp3" },
  { id: 5, name: "ILLEGAL WEAPON 3", image: "songimg/punjabi/ILLEGALWEAPON3.jpeg", time: "05:00", theme: "PUNJABI", releasedata: "", malesinger: "", femalesinger: "", audioUrl: "themesongs/punjabi/ILLEGALWEAPON3.mp3" },
];

const ANIME = [
  { id: 1, name: "A Cruel Angel's Thesis", image: "songimg/anime/acruelangelsthesis.jpg", time: "05:00", theme: "ANIME", releasedata: "", malesinger: "", femalesinger: "", audioUrl: "themesongs/anime/ACruelAngelsThesis.mp3" },
  { id: 2, name: "Blue Bird", image: "songimg/anime/bluebird.jpg", time: "05:00", theme: "ANIME", releasedata: "", malesinger: "", femalesinger: "", audioUrl: "themesongs/anime/BlueBird.mp3" },
  { id: 3, name: "Gurenge  LiSA", image: "songimg/anime/gurenge.jpg", time: "05:00", theme: "ANIME", releasedata: "", malesinger: "", femalesinger: "", audioUrl: "themesongs/anime/GurengeLiSA.mp3" },
  { id: 4, name: "Unravel", image: "songimg/anime/unravel.jpg", time: "05:00", theme: "ANIME", releasedata: "", malesinger: "", femalesinger: "", audioUrl: "themesongs/anime/Unravel.mp3" },
  { id: 5, name: "Wind  Naruto", image: "songimg/anime/windnaruto.jpg", time: "05:00", theme: "ANIME", releasedata: "", malesinger: "", femalesinger: "", audioUrl: "themesongs/anime/WindNaruto.mp3" },
];

const KPOP = [
  { id: 1, name: "As If It's Your Last", image: "songimg/kpop/asifitsyourlast.jpg", time: "05:00", theme: "KPOP", releasedata: "", malesinger: "", femalesinger: "", audioUrl: "themesongs/kpop/AsIfItsYourLast.mp3" },
  { id: 2, name: "DUN DUN EVERGLOW", image: "songimg/kpop/DUNDUNEVERGLOW.jpeg", time: "05:00", theme: "KPOP", releasedata: "", malesinger: "", femalesinger: "", audioUrl: "themesongs/kpop/DUNDUNEVERGLOW.mp3" },
  { id: 3, name: "FANCY", image: "songimg/kpop/FANCY.jpeg", time: "05:00", theme: "KPOP", releasedata: "", malesinger: "", femalesinger: "", audioUrl: "themesongs/kpop/FANCY.mp3" },
  { id: 4, name: "GEE", image: "songimg/kpop/GEE.jpg", time: "05:00", theme: "KPOP", releasedata: "", malesinger: "", femalesinger: "", audioUrl: "themesongs/kpop/GEE.mp3" },
  { id: 5, name: "KILL THIS LOVE", image: "songimg/kpop/KILLTHISLOVE.jpg", time: "05:00", theme: "KPOP", releasedata: "", malesinger: "", femalesinger: "", audioUrl: "themesongs/kpop/KILLTHISLOVE.mp3" },
];

module.exports = {
  BOLLYWOOD,
  ENGLISH,
  BHOJPURI,
  PUNJABI,
  ANIME,
  KPOP,
};
