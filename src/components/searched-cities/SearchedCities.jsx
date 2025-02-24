import React from "react";

function SearchedCities({ fetchedCityData }) {
  return (
    <>
      {fetchedCityData.length > 0 && (
        <div className="w-[780px] p-4 flex flex-wrap gap-6 justify-between bg-white/20 backdrop-blur-md rounded-lg shadow-2xl">
          {fetchedCityData.map((city, index) => (
            <div
              key={index}
              className="w-[360px] bg-gradient-to-tr from-green-400 to-blue-600 backdrop-blur-lg rounded-lg shadow-lg p-6 hover:scale-105 transition-transform duration-300"
            >
              <h2 className="text-2xl font-bold text-white mb-2">
                {city.name}
              </h2>
              <p className="text-white/80 mb-1">
                <span className="font-semibold">Temperature:</span>{" "}
                {(city.main.temp - 273.15).toFixed(2)}°C
              </p>
              <p className="text-white/80 mb-1">
                <span className="font-semibold">Weather:</span>{" "}
                {city.weather[0].description}
              </p>
              <p className="text-white/80 mb-1">
                <span className="font-semibold">Humidity:</span>{" "}
                {city.main.humidity}%
              </p>
              <p className="text-white/80">
                <span className="font-semibold">Wind Speed:</span>{" "}
                {city.wind.speed} m/s
              </p>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default SearchedCities;
