import React, { useState } from 'react'
import InfoBox from './InfoBox'
import SearchBox from './SearchBox'
import "./WeatherApp.css"
function WeatherApp() {
    const [weatherData , setWeatherData] = useState({});
  return (
    <div>
        <h2 className='container'>Weather App</h2>
        <SearchBox setWeatherData={setWeatherData} />
        <InfoBox  weatherData={weatherData}/>
    </div>
  )
}

export default WeatherApp