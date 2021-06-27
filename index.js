const path = require('path');
const methodOverride = require('method-override');
const express = require('express');
const app = express();

// To parse form data and to parse incoming JSON in POST request bodies:
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// To fake put/patch/delete requests:
app.use(methodOverride('_method'));
// Views folder and EJS setup:
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

// --- INDEX - renders index.ejs (aka home) --- //
app.get('/', (req, res) => {
    res.render('index'); // aka view/index.ejs
})
// --- ABOUT - renders about.ejs --- //
app.get('/about', (req, res) => {
    res.render('about'); // aka view/about.ejs
})
// --- GAMES - renders games.ejs --- //
app.get('/games', (req, res) => {
    res.render('games'); // aka view/games.ejs
})





app.listen(3000, () => {
    console.log("ON PORT 3000!")
})