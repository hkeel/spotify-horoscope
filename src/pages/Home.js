import React from "react";
import {Typography, Grid, Paper, TextField, Button} from "@material-ui/core";
import {Autocomplete} from "@material-ui/lab"
import img from '../images/simpson.jpeg';
import "../styles/Home.css";

export default function Home() {
    const signs = [
        {name: "Aries"},
        {name: "Taurus"}, 
        {name: "Gemini"}, 
        {name: "Cancer"}, 
        {name: "Leo"}, 
        {name: "Virgo"},
        {name: "Libra"},
        {name: "Scorpio"},
        {name: "Sagittarius"},
        {name: "Capricorn"},
        {name: "Aquarius"},
        {name: "Pisces"}, ];
        
    //do textfield and button for horoscope
    return(
        <Grid container>
            <Grid item xs={false} sm={4} md={7}>
                <a href="/">
                    <img src={img} className="imgTag" alt="simpson character listening to music"></img>
                </a>
            </Grid>
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                <div className="horoscope__form">
                    <Typography variant="h3">
                        What's your vibe?
                    </Typography>
                    <Typography variant="subtitle1" style={{marginTop: "1rem", marginBottom: "3rem"}}>
                        Find a song that represent your sign's energy.
                    </Typography>
                    <Autocomplete
                        id="combo-box-demo"
                        fullWidth
                        options={signs}
                        getOptionLabel={(option) => option.name}
                        style={{marginBottom: "1rem"}}
                        renderInput={(params) => <TextField {...params} label="Select your horoscope sign" variant="outlined" />}
                    />
                    <Button variant="contained" color="primary" fullWidth>
                    Let's Groove
                    </Button>
                </div>
            </Grid>
        </Grid>
    )
}