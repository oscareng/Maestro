const router = require("express").Router();
const SpotifyWebApi = require("spotify-web-api-node");

const spotifyApi = new SpotifyWebApi({
  clientId: process.env.CLIENTID,
  clientSecret: process.env.SECRET,
  callbackURL: process.env.CALLBACKURL,
});

const n = 3;
const sample = (items) => {
  return items
    .map((x) => ({ x, r: Math.random() }))
    .sort((a, b) => a.r - b.r)
    .map((a) => a.x)
    .slice(0, 1);
};

router.get("/playlist", async (req, res, next) => {
  try {
    spotifyApi.setAccessToken(req.user.token);
    const topTracks = await spotifyApi.getMyTopTracks();
    let tracks = topTracks.body.items;
    let ids = tracks.map((a) => a.id);
    let randomIds = sample(ids);

    const playlistRecomendation = await spotifyApi.getRecommendations({
      seed_genres: req.query.genresList,
      seed_tracks: randomIds.join(","),
      seed_artists: "",
      limit: 50,
    });
    res.send(playlistRecomendation);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

router.get("/nextplaylist", async (req, res, next) => {
  try {
    const playlistRecomendation = await spotifyApi.getRecommendations({
      seed_genres: "",
      seed_tracks: req.query.seedTracks,
      seed_artists: "",
      limit: 50,
    });
    res.send(playlistRecomendation);
  } catch (error) {
    console.log(error);
    next(error);
  }
});
module.exports = router;
