function SearchBar({ getWeatherData, setCity , city}) {
  return (
    <>
      <div className="mt-5 bg-white/20 backdrop-blur-md p-6 rounded-lg shadow-lg flex items-center justify-center gap-4 w-[780px] ">
        <div className="p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 w-138 flex justify-between">
          <input
            type="text"
            placeholder="Search location..."
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="outline-0 w-full"
          />
          <img
            onClick={getWeatherData}
            className="h-8 hover:cursor-pointer"
            src="https://www.svgrepo.com/show/474980/search.svg"
            alt=""
          />
        </div>
        <button
          onClick={getWeatherData}
          className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors cursor-pointer"
        >
          Get Weather
        </button>
      </div>
    </>
  );
}

export default SearchBar;
