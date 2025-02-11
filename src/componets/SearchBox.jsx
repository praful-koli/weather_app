import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./searchBox.css";

function SearchBox({ setWeatherData }) {
  const [city, setCity] = useState("");
  const [isExist ,setIsExitst] = useState(false);
  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "de8d242f11da49f3934e8d3192d8d161";

  let getWeatherInfo = async () => {
    try {
      const respone = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
      const jsonData = await respone.json();
      console.log(jsonData);
      const result = {
        city: city,
        temp: jsonData.main.temp,
        tempMin: jsonData.main.temp_min,
        tempMax: jsonData.main.temp_max,
        humidity: jsonData.main.humidity,
        seaLevel: jsonData.main.sea_level,
        feelsLike: jsonData.main.feels_like,
        description: jsonData.weather[0].description,
        windSpeed: jsonData.wind.speed,
      };
      setWeatherData(result);
      setIsExitst(!isExist);
    } catch (error) {
      setIsExitst(!isExist);
      throw error;
    }
  };

  const handleCity = (event) => {
    setCity(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(city);
    setCity("");
    getWeatherInfo();
  };

  return (
    <div className="searchBox">
      <form action="" method="get" onSubmit={handleSubmit}>
        <TextField
          id="id"
          label="City Name"
          variant="outlined"
          required
          value={city}
          onChange={handleCity}
        />
        <br />
        <br />
        <Button variant="contained" type="submit">
          Search
        </Button>
        {isExist && <p style={{color : '#d50000'}}>NO place exsit in Database</p>} 
      </form>
    </div>
  );
}

export default SearchBox;
