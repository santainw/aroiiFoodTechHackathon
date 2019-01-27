"use strict";
// require("../db/schemaDB")();
// var User = require("mongoose").model("Users");
var passport = require("passport");
var FacebookTokenStrategy = require("passport-facebook-token");
var GoogleTokenStrategy = require("passport-google-token").Strategy;
var config = require("../config");
var mongoose = require("mongoose");
var Users = mongoose.model("Users");

module.exports = function() {
  passport.use(
    new FacebookTokenStrategy(
      {
        clientID: config.facebookAuth.clientID,
        clientSecret: config.facebookAuth.clientSecret
      },
      function(accessToken, refreshToken, profile, done) {
        upsertFbUser(accessToken, refreshToken, profile, function(err, user) {
          return done(err, user);
        });
      }
    )
  );

  passport.use(
    new GoogleTokenStrategy(
      {
        clientID: config.googleAuth.clientID,
        clientSecret: config.googleAuth.clientSecret
      },
      function(accessToken, refreshToken, profile, done) {
        console.log("profile > :", profile);
        // User.upsertGoogleUser(accessToken, refreshToken, profile, function(
        //   err,
        //   user
        // ) {
        return done(err, profile);
        // });
      }
    )
  );

  var upsertFbUser = async function(accessToken, refreshToken, profile, cb) {
    Users.findOne(
      {
        "facebookProvider.id": profile.id
      },
      function(err, user) {
        // no user was found, lets create a new one
        if (!user) {
          let newUser = new Users({
            firstName: profile.name.givenName,
            lastName: profile.name.familyName,
            email: profile.emails[0].value,
            gender: profile.gender,
            facebookProvider: {
              id: profile.id
              //   token: accessToken
            }
          });

          newUser.save(function(error, savedUser) {
            if (error) {
              console.log(error);
            }
            return cb(error, savedUser);
          });
        } else {
          return cb(err, user);
        }
      }
    );
  };
};
