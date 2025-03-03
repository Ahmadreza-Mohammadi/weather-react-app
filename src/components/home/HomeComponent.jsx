import axios from "axios";
import { useState, useEffect } from "react";
import { API_KEY, BASE_URL, LAT_LON_URL } from "../../api/api";
import Header from "../header/Header";
import SearchBar from "../search-bar/SearchBar";
import SearchedCities from "../searched-cities/SearchedCities";
import ErrorModal from "../../shared/modalError";
import Footer from "../footer/footer";

const HomeComponent = () => {
  const [city, setCity] = useState("");
  const [fetchedCityData, setFetchedCityData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  useEffect(() => {
    const storedCities =
      JSON.parse(localStorage.getItem("searchedCities")) || [];
    setFetchedCityData(storedCities.reverse());
  }, []);

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
        const updatedCityData = [...fetchedCityData, weatherData.data];
        setFetchedCityData(updatedCityData.reverse());

        const recentCities = updatedCityData.slice(-5);
        localStorage.setItem("searchedCities", JSON.stringify(recentCities));

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
      <Footer />

      {showModal && (
        <ErrorModal modalMessage={modalMessage} setShowModal={setShowModal} />
      )}
    </div>
  );
};

export default HomeComponent;
