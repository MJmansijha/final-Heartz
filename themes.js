//themedatabase
// const mongoose=require("mongoose")

// mongoose.connect("mongodb://localhost:27017/Heartz")
// .then(()=>{
//     console.log('mongoose connected');
// })
// .catch((e)=>{
//     console.log('failed themedb');
// })

// const themeinfoo=new mongoose.Schema({
//     name:{
//         type:String,
//         required:true
//     },
//     image:{
//         type:String,
//         required:true
//     },
//     link:{
//         type:String,
//         required:true
//     }
// });

// const themes=new mongoose.model('themes', themeinfoo);
const themes = [
    { name: 'ENGLISH', image: 'themeimg/english.jpg', link: '/english' },
    { name: 'BOLLYWOOD', image: 'themeimg/bollywood.jpg', link: '/bollywood' },
    { name: 'BHOJPURI', image: 'themeimg/bhojpuri.jpg', link: '/bhojpuri' },
    { name: 'PUNJABI', image: 'themeimg/punjabi.jpg', link: '/punjabi' },
    { name: 'ANIME', image: 'themeimg/anime.jpg', link: '/anime' },
    { name: 'KPOP', image: 'themeimg/kpop.jpg', link: '/kpop' },
  ]; 
module.exports = themes;
  