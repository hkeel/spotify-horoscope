import axios from "axios";
import { token } from "../constants";

const getPlaylist = (playlistId) => {
  return axios({
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    url: `https://api.spotify.com/v1/playlists/${playlistId}`,
  });
};

export { getPlaylist };
