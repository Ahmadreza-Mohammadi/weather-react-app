import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";
import { ROUTES } from "../../router/const";
import { REGISTER_URL } from "../../api/api";
import Header from "../header/Header";
import Footer from "../footer/footer";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  async function handleRegisterUser() {
    // Reset errors
    setErrors({});

    // Validate inputs
    const newErrors = {};
    if (!name.trim()) newErrors.name = "Name is required";
    if (!email.trim()) newErrors.email = "Email is required";
    if (!password.trim()) newErrors.password = "Password is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      const res = await axios.post(
        REGISTER_URL,
        JSON.stringify({ name, email, password }),
        { headers: { "Content-Type": "application/json" } }
      );
      navigate(ROUTES.login);
      console.log("User registered successfully:", res.data);
    } catch (error) {
      console.error("Registration failed:", error);
    }
    setEmail("");
    setName("");
    setPassword("");
  }

  return (
    <div className="bg-gradient-to-br from-blue-400 to-purple-500 h-screen flex flex-col justify-between items-center gap-10">
      <Header />
      <div className="bg-white bg-opacity-70 shadow-2xl rounded-2xl flex flex-col items-center justify-around w-[780px] py-10 px-8 backdrop-blur-md">
        <h1 className="font-bold text-3xl text-gray-800">Sign Up</h1>
        <div className="flex flex-col gap-5 mt-6 w-full">
          <div className="flex flex-col gap-2">
            <label className="text-gray-700 font-bold text-lg">Name:</label>
            <input
              className="border-gray-300 border rounded-lg p-3 w-full text-gray-800 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition duration-150"
              type="text"
              placeholder="Enter Your Name..."
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-gray-700 font-bold text-lg">Email:</label>
            <input
              className="border-gray-300 border rounded-lg p-3 w-full text-gray-800 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition duration-150"
              type="text"
              placeholder="Enter Email..."
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-gray-700 font-bold text-lg">Password:</label>
            <input
              className="border-gray-300 border rounded-lg p-3 w-full text-gray-800 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition duration-150"
              type="password"
              placeholder="Enter Password..."
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password}</p>
            )}
          </div>
          <button
            onClick={handleRegisterUser}
            className="border-blue-400 border p-3 w-full rounded-md text-white bg-gradient-to-br from-blue-400 to-purple-600 hover:from-blue-500 hover:to-purple-700 transition duration-150 cursor-pointer"
          >
            Register
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default SignUp;
