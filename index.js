const path = require('path');
const methodOverride = require('method-override');
const express = require('express');
const app = express();
const port = 3000;

// To parse form data and to parse incoming JSON in POST request bodies:
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// To fake put/patch/delete requests:
app.use(methodOverride('_method'));
// Views folder and EJS setup:
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
// direct Express to the public/stylesheets folder for css 
app.use(express.static("public"));

function clicked() {
    let clicked = true;
}

// --- INDEX - renders index.ejs (aka home) --- //
app.get('/', (req, res) => {
    // const btn1 = document.querySelector('#cbtn1');
    // btn1.addEventListener('click', function() {
    //     let clicked = true;
    // });
    res.render('index', clicked); // aka views/index.ejs
});

// --- ABOUT - renders about.ejs --- //
app.get('/about', (req, res) => {
    res.render('about'); // aka views/about.ejs
});

// --- GAMES - renders games.ejs --- //
app.get('/games', (req, res) => {
    res.render('games'); // aka views/games.ejs
});





app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
