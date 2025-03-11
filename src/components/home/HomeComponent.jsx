import React, { useState, useEffect } from "react";
import Header from "../header/Header";
import SearchBar from "../search-bar/SearchBar";
import SearchedCities from "../searched-cities/SearchedCities";
import ErrorModal from "../../shared/modalError";
import Footer from "../footer/footer";
import RecentBar from "../recent-bar/recentBar";
import getWeatherData from "../../services/getWetherData";
import FavoritesBar from "../favorites/favorites";
import FavoritesList from "../favorites/favoritesList";

const HomeComponent = () => {
  const [city, setCity] = useState("");
  const [fetchedCityData, setFetchedCityData] = useState([]);
  const [favoriteCities, setFavoriteCities] = useState(
    JSON.parse(localStorage.getItem("favorites")) || []
  );
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  useEffect(() => {
    const storedCities = JSON.parse(localStorage.getItem("searchedCities")) || [];
    setFetchedCityData(storedCities.reverse());
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favoriteCities));
  }, [favoriteCities]);

  function addToFavorites(city) {
    if (!favoriteCities.some((favoriteCity) => favoriteCity.name === city.name)) {
      setFavoriteCities([city, ...favoriteCities]);
    }
  }

  function removeFromFavorites(cityName){
    const updatedFavorites = favoriteCities.filter(city => city.name !== cityName);
    setFavoriteCities(updatedFavorites);
  }

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
      <SearchedCities fetchedCityData={fetchedCityData} addToFavorites={addToFavorites} />
      <FavoritesBar />
      <FavoritesList favoriteCities={favoriteCities} removeFromFavorites={removeFromFavorites} />
      <Footer />

      {showModal && (
        <ErrorModal modalMessage={modalMessage} setShowModal={setShowModal} />
      )}
    </div>
  );
};

export default HomeComponent;
