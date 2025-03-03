function SearchedCities({ fetchedCityData }) {
  return (
    <>
      {fetchedCityData.length > 0 && (
        <div className="w-[780px] p-3 flex flex-wrap gap-6 justify-between bg-white/20 backdrop-blur-md rounded-lg shadow-2xl">
          {fetchedCityData.map((city, index) => (
            <div className="bg-gradient-to-tr from-green-400 to-blue-600 w-[360px]  backdrop-blur-lg rounded-lg shadow-lg p-4 hover:scale-105 transition-transform duration-300 flex gap-16">
              <div key={index} className="bg-blue-200">
                <h2 className="text-2xl font-bold text-white mb-2">
                  {city.name}
                </h2>
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
                    <span>{city.weather[0].description}</span>
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
              </div>
              <div className="bg-red-400 flex items-center">hi</div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default SearchedCities;
