const passport = require('passport');
const express = require('express');
const GoogleStrategy = require('passport-google-oauth20').Strategy
const app = express();

// app.get('/', function (req, res) {
//     res.send('<html><head></head><body><h1>ALGO NOMAS</h1></body></html>')
// });

passport.use(new GoogleStrategy());

const PORT = process.env.PORT || 5000;

app.listen(PORT);