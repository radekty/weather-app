import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloud, faSun, faCloudRain, faThunderstorm } from '@fortawesome/free-solid-svg-icons';

export const getWeatherIcon = (weatherMain) => {
  switch (weatherMain) {
    case 'Clouds':
      return <FontAwesomeIcon icon={faCloud} />;
    case 'Clear':
      return <FontAwesomeIcon icon={faSun} />;
    case 'Rain':
      return <FontAwesomeIcon icon={faCloudRain} />;
    case 'Thunderstorm':
      return <FontAwesomeIcon icon={faThunderstorm} />;
    default:
      return null;
  }
};