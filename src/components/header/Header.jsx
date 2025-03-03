import { useNavigate } from "react-router";
import { ROUTES } from "../../router/const";

function Header() {
  const navigate = useNavigate();
  return (
    <>
      <div className="bg-gray-800/80 backdrop-blur-md w-[780px] p-5 flex justify-between items-center h-20 rounded-lg shadow-lg">
        <div className="flex items-center gap-2">
          <h1 className="text-white font-bold text-3xl">Weather App</h1>
          <img
            className="h-8"
            src="https://www.svgrepo.com/show/491949/weather-color-sun-cloud.svg"
            alt="Weather Icon"
          />
        </div>
        {/* Navbar */}
        <div className="flex gap-4 text-white">
          <span className="hover:text-blue-300 cursor-pointer transition-colors">
            Home
          </span>
          <span onClick={()=>navigate(ROUTES.profile)} className="hover:text-blue-300 cursor-pointer transition-colors">
            Profile
          </span>
          <span className="hover:text-blue-300 cursor-pointer transition-colors ">
            About
          </span>
        </div>
      </div>
    </>
  );
}

export default Header;
