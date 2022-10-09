const SpotifyStrategy = require("passport-spotify").Strategy;
const passport = require("passport");
const refresh = require("passport-oauth2-refresh");
const router = require("express").Router();
const User = require("../db/models/user");
const mongoose = require("mongoose");
require("dotenv").config();

const strategy = new SpotifyStrategy(
  {
    clientID: process.env.CLIENTID,
    clientSecret: process.env.SECRET,
    callbackURL: process.env.CALLBACKURL,
  },

  async function (accessToken, refreshToken, expires_in, profile, done) {
    const user = new User({
      email: profile.emails[0].value,
      spotifyId: profile.id,
      token: accessToken,
      refreshToken: refreshToken,
    });
    return done(null, user);
  }
);

passport.use(strategy);
refresh.use(strategy);

router.get(
  "/",
  passport.authenticate("spotify", {
    scope: [
      "user-read-private user-read-email user-top-read streaming user-read-playback-state user-modify-playback-state  playlist-read-private playlist-read-collaborative user-library-read user-library-modify playlist-modify-public playlist-modify-private",
    ],
  })
);

router.get(
  "/callback",
  passport.authenticate("spotify", { failureRedirect: "/unauth" }),
  function (req, res) {
    res.header("X-Access-Token", req.user.token);
    res.redirect("/home");
  }
);

module.exports = router;
