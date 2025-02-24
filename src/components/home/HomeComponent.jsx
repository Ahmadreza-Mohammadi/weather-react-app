import axios from "axios";
import { useState } from "react";
import { API_KEY, BASE_URL, LAT_LON_URL } from "../../api/api";
import Header from "../header/Header";
import SearchBar from "../search-bar/SearchBar";

const HomeComponent = () => {
  const [city, setCity] = useState("");
  const [fetchedCityData, setFetchedCityData] = useState("");

  const getWeatherData = async () => {
    const res = await axios.get(`${LAT_LON_URL}q=${city}&appid=${API_KEY}`);
    const lat = await res.data[0].lat;
    const lon = await res.data[0].lon;

    const weatherData = await axios.get(
      `${BASE_URL}lat=${lat}&lon=${lon}&appid=${API_KEY}`
    );
    setFetchedCityData([...fetchedCityData, weatherData.data]);
  };

  
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 to-purple-500 flex flex-col items-center pt-10">
      <Header />
      <SearchBar
        getWeatherData={getWeatherData}
        setCity={setCity}
        city={city}
      />
    </div>
  );
};

export default HomeComponent;
