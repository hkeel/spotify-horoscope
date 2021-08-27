import axios from "axios";
import { id, secret } from "../constants";
import querystring from 'querystring';

const getPlaylist = (playlistId, token) => {
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

const getToken = () => {
    return axios({
        method: "POST",
        headers: {
            'Authorization': 'Basic ' + Buffer.from(id + ':' + secret).toString('base64'),
        },
        data: querystring.stringify({'grant_type' : 'client_credentials'}),
        url: 'https://accounts.spotify.com/api/token'
    })
}

export { getPlaylist, getToken };
