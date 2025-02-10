import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./InfoBox.css";
import image from "../assets/scatter_cloud.avif";



function InfoBox({ weatherData }) {
  return (
    <add />
    <div className="infoBox">
      <h2>weather info</h2>
      <div className="cardContainer">
        <Card sx={{ maxWidth: 385 }}>
          <CardMedia sx={{ height: 200 }} image={image} title="green iguana" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {weatherData.city}
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "text.secondary" }}
              component={"span"}
            >
              <div>Temperature : {weatherData.temp}&deg;C</div>
              <div>Humidity : {weatherData.humidity}</div>
              <div>Wind Speed : {weatherData.windSpeed}</div>
              <div>Min Temp : {weatherData.tempMin}</div>
              <div>Max Temp : {weatherData.tempMax}</div>
              <div>SeaLevel : {weatherData.seaLevel}CM</div>
              <div>
                The weather can be Described as <i>{weatherData.description}</i>{" "}
                and feels like : {weatherData.feelsLike}&deg;C
              </div>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default InfoBox;
