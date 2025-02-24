import axios from "axios";
import { useState } from "react";
import { API_KEY, BASE_URL, LAT_LON_URL } from "../../api/api";
import Header from "../header/Header";
import SearchBar from "../search-bar/SearchBar";
import SearchedCities from "../searched-cities/SearchedCities";


const HomeComponent = () => {
  const [city, setCity] = useState("");
  const [fetchedCityData, setFetchedCityData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const getWeatherData = async () => {
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
        setFetchedCityData([...fetchedCityData, weatherData.data]);
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 to-purple-500 flex flex-col items-center gap-3 pt-10 font-fantasy">
      <Header />
      <SearchBar
        getWeatherData={getWeatherData}
        setCity={setCity}
        city={city}
      />

      <SearchedCities fetchedCityData={fetchedCityData} />

      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center animate-fadeIn">
          <div className="bg-white rounded-lg p-6 max-w-sm w-full shadow-lg">
            <p className="text-lg font-semibold mb-4">{modalMessage}</p>
            <button
              onClick={() => setShowModal(false)}
              className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white py-2 rounded-lg hover:from-purple-600 hover:to-blue-600 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomeComponent;
