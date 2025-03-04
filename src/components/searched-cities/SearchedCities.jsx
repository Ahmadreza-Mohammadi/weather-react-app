import { useState, useEffect } from "react";

function SearchedCities({ fetchedCityData }) {
  const [favoriteCities, setFavoriteCities] = useState(
    JSON.parse(localStorage.getItem("favorites")) || []
  );

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favoriteCities));
  }, [favoriteCities]);

  function addToFavorites(city) {
    if (!favoriteCities.some(favoriteCity => favoriteCity.name === city.name)) {
      setFavoriteCities([...favoriteCities, city]);
    }
  }

  return (
    <>
      {fetchedCityData.length > 0 && (
        <>
          <div className="w-[780px] p-6 flex flex-row items-center flex-nowrap gap-6 justify-start bg-white/20 backdrop-blur-md rounded-lg shadow-2xl overflow-x-scroll custom-scrollbar">
            {fetchedCityData.map((city, index) => (
              <div
                key={index}
                className="flex gap-12 items-center bg-gradient-to-tr from-green-400 to-blue-600 w-8/9 h-100 backdrop-blur-lg rounded-lg shadow-lg p-4 hover:scale-105 transition-transform duration-300 flex-shrink-0"
              >
                <div className="p-4 rounded-lg h-full flex flex-col justify-between text-2xl">
                  <div className="flex items-center gap-y-1">
                    <h2 className="text-4xl font-bold text-blue-900 mb-2">
                      {city.name}
                    </h2>
                    <img
                      className="h-6 cursor-pointer"
                      src="https://www.svgrepo.com/show/526669/star.svg"
                      alt=""
                      onClick={() => addToFavorites(city)}
                    />
                  </div>
                  <div className="text-white/80 mb-1 flex gap-2 items-center">
                    <div className="flex items-center gap-1">
                      <img
                        className="h-6"
                        src="https://www.svgrepo.com/show/475590/temperature.svg"
                        alt=""
                      />
                      <span className="font-semibold">Temperature:</span>
                      <span>{(city.main.temp - 273.15).toFixed(2)}°C</span>
                    </div>
                  </div>

                  <div className="text-white/80 mb-1 flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      <img
                        className="h-8"
                        src="https://www.svgrepo.com/show/503853/weather.svg"
                        alt=""
                      />
                      <span className="font-semibold">Weather:</span>
                      <span  className="text">{city.weather[0].description}</span>
                    </div>
                  </div>

                  <div className="text-white/80 mb-1 flex gap-2">
                    <div className="flex items-center gap-1">
                      <img
                        className="h-5"
                        src="https://www.svgrepo.com/show/279711/humidity.svg"
                        alt=""
                      />
                      <span className="font-semibold">Humidity:</span>
                      <span>{city.main.humidity}%</span>
                    </div>
                  </div>
                  <div className="text-white/80 flex gap-2">
                    <div className="flex items-center gap-1">
                      <img
                        className="h-6"
                        src="https://www.svgrepo.com/show/475599/wind-svg.svg"
                        alt=""
                      />
                      <span className="font-semibold">Wind Speed:</span>
                      <span>{city.wind.speed} m/s</span>
                    </div>
                  </div>
                  <div className="text-white/80 mb-1 flex gap-2 items-center">
                    <div className="flex items-center gap-1">
                      <img
                        className="h-6"
                        src="https://www.svgrepo.com/show/475590/temperature.svg"
                        alt=""
                      />
                      <span className="font-semibold">Feels Like:</span>
                      <span>
                        {(city.main.feels_like - 273.15).toFixed(2)}°C
                      </span>
                    </div>
                  </div>
                </div>
                <div className="w-[250px] flex justify-center">
                  {city.weather[0].main === "Clear" && (
                    <img src="https://www.svgrepo.com/show/398422/sun-with-face.svg" />
                  )}
                  {city.weather[0].main === "Clouds" && (
                    <img src="https://www.svgrepo.com/show/276635/cloudy-cloud.svg" />
                  )}
                  {city.weather[0].main === "Rain" && (
                    <img src="https://www.svgrepo.com/show/313157/rainy.svg" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
}

export default SearchedCities;
