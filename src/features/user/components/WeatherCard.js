// src/features/user/components/WeatherCard.js
import React, { useState } from "react";
import { useFetch } from "../../../shared/hooks/useFetch";
import Loading from "../../../shared/components/Loading";
import { getWeatherByCity } from "../services/weatherService";
import "./WeatherCard.css";

const WeatherCard = () => {
  const [city, setCity] = useState("Hanoi");
  const { data, loading, error } = useFetch(getWeatherByCity(city));

  return (
    <div className="weather-container">
      <h1>Weather App</h1>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city"
      />
      {loading && <Loading />}
      {error && <p style={{ color: "red" }}>Error: {error.message}</p>}
      {data && (
        <div className="weather-card">
          <h2>{data.name}</h2>
          <p>{data.weather[0].description}</p>
          <p>🌡 {data.main.temp} °C</p>
          <p>💨 {data.wind.speed} m/s</p>
        </div>
      )}
    </div>
  );
};

export default WeatherCard;
