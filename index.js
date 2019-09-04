const passport = require('passport');
const express = require('express');
const GoogleStrategy = require('passport-google-oauth20').Strategy
const app = express();

const keys = require('./config/keys');
// app.get('/', function (req, res) {
//     res.send('<html><head></head><body><h1>ALGO NOMAS</h1></body></html>')
// });

passport.use(
    new GoogleStrategy({
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback'
    }, (accessToken) => {
        console.log(accessToken);
    }));

app.get('/auth/google', passport.authenticate('google', {
    scope: ['profile', 'email']
}));

const PORT = process.env.PORT || 5000;

app.listen(PORT);