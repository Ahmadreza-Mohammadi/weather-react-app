import axios from "axios";
import { useState } from "react";
import { API_KEY, BASE_URL, LAT_LON_URL } from "../../api/api";

const HomeComponent = () => {
  const [city, setCity] = useState("");

  const getWeatherData = async () => {
    const res = await axios.get(`${LAT_LON_URL}q=${city}&appid=${API_KEY}`);
    const lat = await res.data[0].lat;
    const lon = await res.data[0].lon;

    const weatherData = await axios.get(
      `${BASE_URL}lat=${lat}&lon=${lon}&appid=${API_KEY}`
    );
    console.log(weatherData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 to-purple-500 flex flex-col items-center pt-10">
      {/* Header */}
      <div className="bg-gray-800/80 backdrop-blur-md w-[780px] p-5 flex justify-between items-center h-20 rounded-lg shadow-lg">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <h1 className="text-white font-bold text-3xl">Weather App</h1>
          <img
            className="h-8"
            src="https://www.svgrepo.com/show/491949/weather-color-sun-cloud.svg"
            alt="Weather Icon"
          />
        </div>
        {/* Navbar */}
        <div className="flex gap-4 text-white">
          <span className="hover:text-blue-300 cursor-pointer transition-colors">Home</span>
          <span className="hover:text-blue-300 cursor-pointer transition-colors">Profile</span>
          <span className="hover:text-blue-300 cursor-pointer transition-colors ">About</span>
        </div>
      </div>

      {/* Search Bar */}
      <div className="mt-10 bg-white/20 backdrop-blur-md p-6 rounded-lg shadow-lg flex items-center gap-4">
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 w-64"
        />
        <button
          onClick={getWeatherData}
          className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors cursor-pointer"
        >
          Get Weather
        </button>
      </div>
    </div>
  );
};

export default HomeComponent;