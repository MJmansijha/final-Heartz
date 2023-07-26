const express=require("express")
const path=require("path")
const app = express();
const port=3000;
const themes = require('./themes');
const songs = require('./songs');

let n="yooo"
// set static file
app.use(express.static('static'));


// show in template
const albumname = "Bollywood";
app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views'))
// render the template
app.use('/bollywood',(req, res)=>{
    res.status(200).render('play.pug',{songs,albumname});
});
app.use('/english',(req, res)=>{
    res.status(200).render('play.pug',{songs,albumname});
});
app.use('/bhojpuri',(req, res)=>{
    res.status(200).render('play.pug',{songs,albumname});
});
app.use('/punjabi',(req, res)=>{
    res.status(200).render('play.pug',{songs,albumname});
});
app.use('/kpop',(req, res)=>{
    res.status(200).render('play.pug',{songs,albumname});
});
app.use('/anime',(req, res)=>{
    res.status(200).render('play.pug',{songs,albumname});
});
app.use('/login',(req, res)=>{
    res.status(200).render('login');
});
app.use('/register',(req, res)=>{
    res.status(200).render('register');
});
app.use('/',(req, res)=>{
    res.status(200).render('theme', {themes});
});
// app listen
app.listen(port, ()=>{
    console.log(`app is listing on port ${port}`);
});