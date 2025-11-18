// src/features/user/services/weatherService.js
export const getWeatherByCity = (city) => {
  const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
  const url = `${process.env.REACT_APP_WEATHER_API_URL}?q=${city}&units=metric&appid=${apiKey}`;
  return url;
};
