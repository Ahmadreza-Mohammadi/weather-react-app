import React, { useState, useEffect } from "react";
import Header from "../header/Header";
import SearchBar from "../search-bar/SearchBar";
import SearchedCities from "../searched-cities/SearchedCities";
import ErrorModal from "../../shared/modalError";
import Footer from "../footer/footer";
import RecentBar from "../recent-bar/recentBar";
import getWeatherData from "../../services/getWetherData"
import FavoritesBar from "../favorites/favorites";

const HomeComponent = () => {
  const [city, setCity] = useState("");
  const [fetchedCityData, setFetchedCityData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  useEffect(() => {
    const storedCities = JSON.parse(localStorage.getItem("searchedCities")) || [];
    setFetchedCityData(storedCities.reverse());
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 to-purple-500 flex flex-col items-center gap-3 pt-10 font-fantasy">
      <Header />
      <SearchBar
        getWeatherData={() =>
          getWeatherData(city, setFetchedCityData, setModalMessage, setShowModal, fetchedCityData, setCity)
        }
        setCity={setCity}
        city={city}
      />
      <RecentBar />
      <SearchedCities fetchedCityData={fetchedCityData} />
      <FavoritesBar />
      <Footer />

      {showModal && (
        <ErrorModal modalMessage={modalMessage} setShowModal={setShowModal} />
      )}
    </div>
  );
};

export default HomeComponent;
