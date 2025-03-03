import axios from "axios";
import { useEffect, useState } from "react";
import { REGISTER_URL } from "../../api/api";
import { useNavigate } from "react-router";
import { ROUTES } from "../../router/const";
import Header from "../header/Header";
import Footer from "../footer/footer";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(false); // تغییر داده شد به false

  const navigate = useNavigate();

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await axios.get(REGISTER_URL);
        setUsers(res.data);
      } catch (err) {
        console.error("Error fetching users:", err);
      }
    };
    getUsers();
  }, []);

  const handleLogin = () => {
    const user = users.find(
      (user) => user.email === email && user.password === password
    );

    if (user) {
      navigate(ROUTES.home);
    } else {
      setError("Invalid email or password.");
    }
  };

  const toggleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="bg-gradient-to-br from-blue-400 to-purple-500 h-screen flex flex-col justify-between items-center gap-10">
      <Header />
      <div className="bg-white h-120 bg-opacity-70 shadow-2xl rounded-2xl flex flex-col items-center justify-around w-[780px] py-10 px-8 backdrop-blur-md">
        <h1 className="font-bold text-3xl text-gray-800">Sign In</h1>
        <div className="flex flex-col gap-5 mt-6 w-full">
          <div className="flex flex-col gap-2">
            <label className="text-gray-700 font-bold text-lg">Email:</label>
            <input
              className="border-gray-300 border rounded-lg p-3 w-full text-gray-800 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition duration-150"
              type="text"
              placeholder="Enter Email..."
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-gray-700 font-bold text-lg">Password:</label>
            <div className="flex justify-between items-center border-gray-300 border rounded-lg p-3 w-full text-gray-800 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition duration-150">
              <input
                className="outline-none w-full"
                type={showPassword ? "text" : "password"}
                placeholder="Enter Password..."
                onChange={(e) => setPassword(e.target.value)}
              />
              <img
                className="h-6 cursor-pointer"
                src={
                  showPassword
                    ? "https://www.svgrepo.com/show/497987/eye-slash.svg"
                    : "https://www.svgrepo.com/show/401467/eye.svg"
                }
                alt=""
                onClick={toggleShowPassword}
              />
            </div>
          </div>
          <button
            className="border-blue-400 border p-3 w-full rounded-md text-white bg-gradient-to-br from-blue-400 to-purple-600 hover:from-blue-500 hover:to-purple-700 transition duration-150 cursor-pointer"
            onClick={handleLogin}
          >
            Login
          </button>
        </div>
        {error && <p className="text-red-500 mt-4">{error}</p>}
        {success && <p className="text-green-500 mt-4">{success}</p>}
      </div>
      <Footer />
    </div>
  );
}

export default Login;
