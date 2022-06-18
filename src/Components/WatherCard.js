import React from "react";

const WatherCard = ({ weatherData }) => {
  let time = `${new Date().getHours()}:${new Date().getMinutes()}`;

  console.log(time);
  let sec = weatherData.sunset;
  let date = new Date(sec * 1000);
  const sunsetTime = `${date.getHours()}:${date.getMinutes()}`;
  return (
    <>
      <div className="weather-info">
        <div className="temp">
          <span>
            <h1 className="temp-data">{weatherData.temp} &#8451;</h1>
          </span>
          <div>
            <h3 className="weather-mood">{weatherData.weatherMood}</h3>
            <h4 className="location">{weatherData.name}</h4>
          </div>
        </div>
        <div className="time-date">
          <h2 className="date">{new Date().toISOString().slice(0, 10)}</h2>
          <h2 className="time">{time}</h2>
        </div>
      </div>

      <div className="last-section">
        <div className="sunset">
          <div className="sunSet-logo">
            <i className="fa-solid fa-sun-plant-wilt image"></i>
          </div>
          <div className="sunSet-data">
            <h4 className="sunSet-time ">{sunsetTime} PM</h4>
            <h4>Sunset</h4>
          </div>
        </div>
        <div className="humidity">
          <div className="humidity-logo">
            <i className="fa-solid fa-water image"></i>
          </div>
          <div className="humidity-data">
            <h4 className="humidity-time">{weatherData.humidity} </h4>
            <h4>Humidity</h4>
          </div>
        </div>
        <div className="pressure">
          <div className="pressure-logo">
            <i className="fa-brands fa-wpressr image"></i>
          </div>
          <div className="pressure-data">
            <h4 className="pressure-time">{weatherData.pressure}</h4>
            <h4>pressure</h4>
          </div>
        </div>
        <div className="speed">
          <div className="speed-logo">
            <i className="fa-solid fa-gauge image"></i>
          </div>
          <div className="speed-data">
            <h4 className="speed-time">{weatherData.speed}</h4>
            <h4>Speed</h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default WatherCard;
