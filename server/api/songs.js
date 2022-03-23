const router = require("express").Router();
const SpotifyWebApi = require("spotify-web-api-node");

const spotifyApi = new SpotifyWebApi({
  clientId: process.env.CLIENTID,
  clientSecret: process.env.SECRET,
  callbackURL: "http://localhost:8888/auth/spotify/callback",
});

router.get("/", (req, res, next) => {
  try {
    spotifyApi.setAccessToken(req.user.token);
    spotifyApi.getMyTopTracks().then(async function (data) {
      console.log(req.user);
      // console.log(data.body.items);
      let topSongs = data.body.items;
      topSongs.forEach(async song => {
        console.log(count++);
        await User.updateOne({ spotifyId: req.user.spotifyId }, {$push: {topSongs: song}})
      })
      res.send(data.body.items);
    });
  } catch (error) {
    next(error);
  }
});


module.exports = router;