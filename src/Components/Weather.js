import React from "react";
import { useState, useEffect } from "react";
import WatherCard from "./WatherCard";
import "./Weather.css";

const Weather = () => {
  const [searchValue, setSearchValue] = useState("kathmandu");
  const [weatherData, setWeatherData] = useState({});

  const getWeatherData = async () => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=3d97b3b7cc808102c7be63d0abb7ba45`;
      const response = await fetch(url); //Fetch returns the promise
      const data = await response.json();
      const { speed } = data.wind;
      const { humidity, pressure, temp } = data.main;
      const { name } = data;
      const { country, sunset } = data.sys;
      const { main: weatherMood } = data.weather[0];
      const myWeatherData = {
        country,
        name,
        temp,
        humidity,
        pressure,
        speed,
        sunset,
        weatherMood,
      };
      setWeatherData(myWeatherData);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getWeatherData();
  }, []);

  return (
    <>
      <div className="search">
        <input
          type="search"
          placeholder="Kathmandu"
          value={searchValue}
          onChange={(event) => {
            setSearchValue(event.target.value.toLowerCase());
          }}
        />
        <button onClick={getWeatherData}>Search</button>
      </div>
      <div className="wrapper">
        <div className="weatherLogo">
          <i className="fa-solid fa-sun logo"></i>
        </div>
        {/* WEATHER INFO */}
        <WatherCard weatherData={weatherData} />
      </div>
    </>
  );
};

export default Weather;
