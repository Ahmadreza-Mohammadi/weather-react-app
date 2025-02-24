import React from "react";

function SearchedCities({ fetchedCityData }) {
  return (
    <>
      {fetchedCityData.length > 0 && (
        <div className="w-[780px] p-3 flex flex-wrap gap-6 justify-between bg-white/20 backdrop-blur-md rounded-lg shadow-2xl">
          {fetchedCityData.map((city, index) => (
            <div
              key={index}
              className="w-[360px] bg-gradient-to-tr from-green-400 to-blue-600 backdrop-blur-lg rounded-lg shadow-lg p-4 hover:scale-105 transition-transform duration-300"
            >
              <h2 className="text-2xl font-bold text-white mb-2">
                {city.name}
              </h2>
              <div className="text-white/80 mb-1 flex gap-2  it">
                <div className="flex items-center gap-1">
                  <img
                    className="h-6"
                    src="https://www.svgrepo.com/show/475590/temperature.svg"
                    alt=""
                  />
                  <span className="font-semibold">Temperature:</span>
                </div>
                {(city.main.temp - 273.15).toFixed(2)}°C
              </div>
              <div className="text-white/80 mb-1 flex items-center gap-2">
                <div className="flex items-center gap-1">
                  <img
                    className="h-8"
                    src="https://www.svgrepo.com/show/503853/weather.svg"
                    alt=""
                  />
                  <span className="font-semibold">Weather:</span>
                </div>
                {city.weather[0].description}
              </div>
              <div className="text-white/80 mb-1 flex gap-2">
                <div className="flex items-center gap-1">
                  <img
                    className="h-5"
                    src="https://www.svgrepo.com/show/279711/humidity.svg"
                    alt=""
                  />
                  <span className="font-semibold">Humidity:</span>
                </div>
                {city.main.humidity}%
              </div>
              <div className="text-white/80 flex gap-2">
                <div className="flex items-center gap-1">
                  <img
                    className="h-6"
                    src="https://www.svgrepo.com/show/475599/wind-svg.svg"
                    alt=""
                  />
                  <span className="font-semibold">Wind Speed:</span>
                </div>
                {city.wind.speed} m/s
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default SearchedCities;
