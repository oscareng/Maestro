import React, { useEffect } from "react";
import SpotifyPlayer from "react-spotify-web-playback";
import { useSelector, useDispatch } from "react-redux";
import { getPlaylist } from "../redux/getPlaylist";
import fetchPlaylist from "../redux/hooks/fetchPlaylist";
import { togglePlaylist, setPlaying } from "../redux/playlist.js";
function Player({ user, playlistTracks }) {
  const dispatch = useDispatch();
  function getUris(arrayOfTracks) {
    return arrayOfTracks.map((track) => track.uri);
  }
  const toggle = useSelector((state) => state.playlist.toggle);
  const currentSong = useSelector((state) => state.playlist.playing);
  function startHere(currentSong, arrayOfTracks) {
    if (currentSong) {
      return arrayOfTracks.map((track) => track.uri).indexOf(currentSong);
    } else return 0;
  }

  return (
    <div className="staticFix">
      {
        user.token && Object.keys(playlistTracks).length > 0 ? (
          <SpotifyPlayer
            initialVolume={0.5}
            token={user.token}
            uris={getUris(playlistTracks.playlist)}
            offset={startHere(currentSong, playlistTracks.playlist)}
            autoPlay={true}
          />
        ) : (
        <p> Loading </p>
        )
      }
    </div>
  );
}

export default Player;
