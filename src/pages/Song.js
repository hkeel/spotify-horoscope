import React, {useState, useEffect} from "react";
import {Typography, Grid, CircularProgress} from "@material-ui/core";
import "../styles/Song.css";
import { getPlaylist } from "../services/APIServices";


export default function Song(props) {
    let playListId = "";
    const [loading, setLoading] = useState(true);
    
    useEffect((playListId, sign) => {
        sign = props.userSign;
        if (sign === "Aries") {
            playListId = "37i9dQZF1DX2DC3Q7JOmYe";
        } else if (sign === "Taurus") {
            playListId = "37i9dQZF1DXbCgDGG5xQtb";
        } else if (sign === "Gemini") {
            playListId = "37i9dQZF1DWWVULI5wUsL9";
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

        getPlaylist(playListId).then((res)=> {
            console.log(res.data.tracks.items);
            let index = Math.floor(Math.random() * 10)
            console.log(res.data.tracks.items[index].track.name)
            setLoading(false);
        })
    }, [props.userSign]);

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
                  style={{ paddingTop: 20 }}
                >
                  <Grid item xs={3}>
                    <CircularProgress />
                  </Grid>
                </Grid>
              </div>
            )}
        else {
            return (
                <div>HI</div>
            )
        }
    }
        

    return (
        <div className="content">
            <Typography variant="h3">
                Vibing with a {props.userSign} be like...
            </Typography>
            {renderSong(playListId, props.userSign)}
        </div>
    );
}