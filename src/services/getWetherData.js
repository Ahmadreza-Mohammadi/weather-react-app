// src/services/WeatherService.js
import axios from "axios";
import { API_KEY, BASE_URL, LAT_LON_URL } from "../api/api"

export const getWeatherData = async (city, setFetchedCityData, setModalMessage, setShowModal, fetchedCityData, setCity) => {
  if (!city.trim()) {
    setModalMessage("Please enter a city name!");
    setShowModal(true);
    return;
  }

  try {
    const res = await axios.get(`${LAT_LON_URL}q=${city}&appid=${API_KEY}`);
    const filteredResults = res.data.filter(
      (item) => item.name.toLowerCase() === city.toLowerCase()
    );

    if (filteredResults.length === 0) {
      setModalMessage("City not found. Please enter an exact city name!");
      setShowModal(true);
      return;
    }

    const lat = filteredResults[0].lat;
    const lon = filteredResults[0].lon;

    const weatherData = await axios.get(
      `${BASE_URL}lat=${lat}&lon=${lon}&appid=${API_KEY}`
    );

    const isCityAlreadyAdded = fetchedCityData.some(
      (data) =>
        data.name.toLowerCase() === weatherData.data.name.toLowerCase()
    );

    if (!isCityAlreadyAdded) {
      const updatedCityData = [...fetchedCityData, weatherData.data];
      setFetchedCityData(updatedCityData.reverse());

      const recentCities = updatedCityData.slice(-5);
      localStorage.setItem("searchedCities", JSON.stringify(recentCities));
      if (recentCities.length > 5) {
        recentCities[0].pop();
        localStorage.setItem(
          "searchedCities",
          JSON.stringify(SearchedCities)
        );
      }

      setCity("");
    } else {
      setModalMessage(`${weatherData.data.name} is already exist!`);
      setShowModal(true);
    }
  } catch (error) {
    console.error("Error fetching weather data:", error);
    setModalMessage("Failed to fetch weather data. Please try again.");
    setShowModal(true);
  }
};

export default getWeatherData;
