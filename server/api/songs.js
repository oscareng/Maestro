const router = require("express").Router();
const SpotifyWebApi = require("spotify-web-api-node");
require("dotenv").config();

const spotifyApi = new SpotifyWebApi({
  clientId: process.env.CLIENTID,
  clientSecret: process.env.SECRET,
  callbackURL: process.env.CALLBACKURL,
});

router.get("/topTracks", (req, res, next) => {
  try {
    spotifyApi.setAccessToken(req.user.token);
    spotifyApi.getMyTopTracks().then(async function (data) {
      res.send(data.body.items);
    });
  } catch (error) {
    next(error);
  }
});

router.get("/recs", (req, res, next) => {
  try {
    spotifyApi.setAccessToken(req.user.token);
    spotifyApi.getRecommendations().then(function (data) {
      res.send(data.body.items);
    });
  } catch (error) {
    next(error);
  }
});
router.get("/playlist", (req, res, next) => {
  spotifyApi.setAccessToken(req.user.token);
  spotifyApi.getPlaylist("08SEtNKtOwc7p74VZiriVx").then(function (data) {
    const trackUris = data.body.tracks.items.map(
      (trackDetails) => trackDetails.track.uri
    );
    res.send(trackUris);
  });
});

router.get("/likedSongs", (req, res, next) => {
  spotifyApi.setAccessToken(req.user.token);
  spotifyApi.containsMySavedTracks(req.query.songs).then(function (data) {
    res.send(data);
  });
});

router.get("/unlike", (req, res, next) => {
  try {
    spotifyApi.setAccessToken(req.user.token);
    spotifyApi.removeFromMySavedTracks(req.query.song).then(function (data) {
      res.send(data);
    });
  } catch (err) {
    res.send(`failed to remove song!`);
  }
});

router.get("/like", (req, res, next) => {
  try {
    spotifyApi.setAccessToken(req.user.token);
    spotifyApi.addToMySavedTracks(req.query.song).then(function (data) {
      res.send(data);
    });
  } catch (err) {
    res.send(`failed to remove song!`);
  }
});

router.get("/createplaylist", async (req, res, next) => {
  try {
    console.log("userId", typeof req.query.userId);
    await spotifyApi.setAccessToken(req.user.token);
    const playlist = await spotifyApi.createPlaylist(
      req.query.userId,
      `Free Swan`,
      { public: true },
      callback
    );
    res.send(playlist);
  } catch (err) {
    res.send(`failed to create playlist!`);
  }
});

module.exports = router;
