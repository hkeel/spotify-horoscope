import React, { useState, useEffect } from "react";
import { Typography, Grid, CircularProgress, Button } from "@material-ui/core";
import "../styles/Song.css";
import { getPlaylist, getToken } from "../services/APIServices";
import { useHistory } from "react-router";

export default function Song(props) {
  let playListId = "";
  const [loading, setLoading] = useState(true);
  const [song, setSong] = useState();
  const history = useHistory();
  let token = "";

  useEffect(
    (playListId, sign) => {
      sign = props.userSign;
      if (sign === "Aries") {
        playListId = "37i9dQZF1DX2DC3Q7JOmYe";
      } else if (sign === "Taurus") {
        playListId = "37i9dQZF1DXbCgDGG5xQtb";
      } else if (sign === "Gemini") {
        playListId = "37i9dQZF1DWWVULl5wUsL9";
      } else if (sign === "Cancer") {
        playListId = "37i9dQZF1DXaeX3MJpiD4U";
      } else if (sign === "Leo") {
        playListId = "37i9dQZF1DX7cvHpkIJFt2";
      } else if (sign === "Virgo") {
        playListId = "37i9dQZF1DX6PdsVYbP4rI";
      } else if (sign === "Libra") {
        playListId = "37i9dQZF1DXco4NYQOMLiT";
      } else if (sign === "Scorpio") {
        playListId = "37i9dQZF1DX0YZgrwmizcR";
      } else if (sign === "Sagittarius") {
        playListId = "37i9dQZF1DX93MXPufCcuk";
      } else if (sign === "Capricorn") {
        playListId = "37i9dQZF1DX2rcqmLx0nK4";
      } else if (sign === "Aquarius") {
        playListId = "37i9dQZF1DX7F9VDRJOFhw";
      } else if (sign === "Pisces") {
        playListId = "37i9dQZF1DWX0EDWtabVRv";
      }

      getToken()
        .then((res) => {
          // eslint-disable-next-line react-hooks/exhaustive-deps
          token = res.data.access_token;
        })
        .then(() => {
          getPlaylist(playListId, token)
            .then((res) => {
              console.log(res.data.tracks.items);
              let index = Math.floor(
                Math.random() * res.data.tracks.items.length
              );
              console.log(res.data.tracks.items[index].track);
              setSong(res.data.tracks.items[index].track);
            })
            .finally(() => {
              setLoading(false);
            });
        });
    },
    [props.userSign]
  );

  const renderSong = () => {
    if (loading) {
      return (
        <div>
          <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            style={{ paddingTop: 200, paddingBottom: 2000 }}
          >
            <Grid item xs={3}>
              <CircularProgress />
            </Grid>
          </Grid>
        </div>
      );
    } else {
      return (
        <div style={{ paddingTop: 20 }}>
          <Typography variant="h5">{song.name}</Typography>
          <Typography variant="subtitle1">By {song.artists[0].name}</Typography>
          <img
            src={song.album.images[0].url}
            alt="album cover"
            style={{ marginTop: 10, maxWidth: "100%", height: "auto" }}
          ></img>
          <p></p>
          <audio controls style={{ marginBottom: 100, marginTop: 20, maxWidth: "100%", height: "auto" }}>
            <source src={song.preview_url} type="audio/mp3"></source>
          </audio>
        </div>
      );
    }
  };

  const handleClick = (e) => {
    e.preventDefault();
    history.push("/");
  };

  return (
    <body style={{ backgroundColor: "rgba(240, 227, 245, 0.9)" }}>
      <Button
        variant="contained"
        color="primary"
        style={{ marginTop: 15, marginLeft: 10 }}
        onClick={handleClick}
      >
        Back
      </Button>
      <div className="content">
        <Typography variant="h4" style={{ paddingTop: 20 }}>
          Your {props.userSign} song is:
        </Typography>
        {renderSong(playListId, props.userSign)}
      </div>
    </body>
  );
}
