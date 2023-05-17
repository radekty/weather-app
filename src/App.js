import React, { useState } from 'react';
import { dateBuilder } from './dateBuilder';
import { getWeatherIcon } from './weatherIcons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWind, faDroplet, faTemperature0, faArrowDown } from '@fortawesome/free-solid-svg-icons';

const api = {
  key: "f8b2a786119a5b6d546485caf97198c3",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const search = evt => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(res => res.json())
        .then(result => {
          setWeather(result);
          setQuery('');
          console.log(result);
        });
    }
  }

return (
  <div className={(typeof weather.main != "undefined") ? ((weather.main.temp > 16) ? 'App warm' : 'App') : 'App'}>
    <main>
      <div className="search-box">
        <input 
          type="text"
          className="search-bar"
          placeholder="Search..."
          onChange={e => setQuery(e.target.value)}
          value={query}
          onKeyPress={search}
        />
      </div>
      {(typeof weather.main != "undefined") ? (
      <div>
        <div className="location-box">
          <div className="location">{weather.name}, {weather.sys.country}</div>
          <div className="date">{dateBuilder(new Date())}</div>
        </div>
        <div className="weather-box">

            <div className="temperature">
              <FontAwesomeIcon icon={faTemperature0} />
              {Math.round(weather.main.temp)}°c
            </div>
            <div className="weather">
              {getWeatherIcon(weather.weather[0].main)}
              {weather.weather[0].main}
            </div>
            <div className="wind">
              <FontAwesomeIcon icon={faWind} />
              {Math.round(weather.wind.speed*3.6)}km/h
            </div>
            <div className="humidity">
            <FontAwesomeIcon icon={faDroplet} />
              {weather.main.humidity}%
            </div>
            <div className="pressure">
            <FontAwesomeIcon icon={faArrowDown} />
              {weather.main.pressure} hPa
            </div>

        </div>
      </div>
      ) : ('')}
    </main>
  </div>
);
}

export default App;
