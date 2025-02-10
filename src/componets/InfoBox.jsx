import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./InfoBox.css";
import image from "../assets/scatter_cloud.avif";
function InfoBox() {
  const weatherInfo = {
    city: "Nashik",
    description: "scattered clouds",
    feelsLike: 20.63,
    humidity: 40,
    seaLevel: 1015,
    temp: 21.39,
    tempMax: 21.39,
    tempMin: 21.39,
    windSpeed: 1.13,
  };
  return (
    <div className="infoBox">
      <h2>weather info</h2>
      <Card sx={{ maxWidth: 385 }}>
        <CardMedia sx={{ height: 200 }} image={image} title="green iguana" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {weatherInfo.city}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }} component={"span"}>
            <div>Temperature  : {weatherInfo.temp}&deg;C</div>
            <div>Humidity  : {weatherInfo.humidity}</div>
            <div>Wind Speed   : {weatherInfo.windSpeed}</div>
            <div>Min Temp  : {weatherInfo.tempMin}</div>
            <div>Max Temp  : {weatherInfo.tempMax}</div>
            <div>SeaLevel  : {weatherInfo.seaLevel}CM</div>
            <div>The weather can be Described as <i>{weatherInfo.description}</i> and feels like  : {weatherInfo.feelsLike}&deg;C</div>
           


          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default InfoBox;
