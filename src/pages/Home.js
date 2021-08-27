import React from "react";
import { Typography, Grid, Paper, TextField, Button } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import img from "../media/simpson.jpeg";
import "../styles/Home.css";
import { useHistory } from "react-router";

export default function Home(props) {
  const signs = [
    "Aries",
    "Taurus",
    "Gemini",
    "Cancer",
    "Leo",
    "Virgo",
    "Libra",
    "Scorpio",
    "Sagittarius",
    "Capricorn",
    "Aquarius",
    "Pisces",
  ];
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push("/Song");
  };
  
  return (
    <Grid container>
      <Grid item xs={false} sm={4} md={7}>
        <a href="/">
          <img
            src={img}
            className="imgTag"
            alt="simpson character listening to music"
          ></img>
        </a>
      </Grid>
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className="horoscope__form">
          <Typography variant="h3">What's your vibe?</Typography>
          <Typography
            variant="subtitle1"
            style={{ marginTop: "1rem", marginBottom: "3rem" }}
          >
            Find a song that represent your sign's energy.
          </Typography>
          <Autocomplete
            id="combo-box-demo"
            fullWidth
            options={signs}
            getOptionLabel={(option) => option}
            style={{ marginBottom: "1rem" }}
            inputValue={props.userSign}
            onInputChange={(event, newInputValue) => {
              props.setUserSign(newInputValue);
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Select your horoscope sign"
                variant="outlined"
                required
              />
            )}
          />
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleSubmit}
          >
            Let's Groove
          </Button>
        </div>
      </Grid>
    </Grid>
  );
}
