const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');
const mongoose = require('mongoose');

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
  //TODO: Is this ok? Need to learn if set cookie stuff is secure
  //Return mongodb UID
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id)
  .then(user => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback',
    proxy: true
  }, (accessToken, refreshToken, profile, done) => {
    User.findOne({ googleID: profile.id })
    .then((existingUser) => {
      if(existingUser) {
        //Found existing user
        done(null, existingUser);
      } else {
        //Make new db entry with user, await and then call done
        new User({ googleID: profile.id })
        .save()
        .then(user => done(null, user));
      }
    });
  })
);
