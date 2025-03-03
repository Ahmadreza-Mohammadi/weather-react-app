import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";
import { ROUTES } from "../../router/const";
import { REGISTER_URL } from "../../api/api";

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

    // If there are errors, set them and stop the function
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // If no errors, proceed with the request
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
    <div className="bg-gradient-to-br from-blue-400 to-purple-500 h-screen flex justify-center items-center">
      <div className="p-4 bg-gradient-to-br from-orange-300 to-red-600 shadow-2xl rounded-2xl flex flex-col items-center justify-between w-160 h-72">
        <h1 className="font-bold text-2xl text-white ">Sign Up</h1>
        <div className="flex flex-col gap-2">
          <div>
            <input
              className="border-gray-300 border rounded-lg p-1 w-96"
              type="text"
              placeholder="Enter Your Name..."
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
            {errors.name && (
              <p className="text-yellow-200 text-sm">{errors.name}</p>
            )}
          </div>
          <div>
            <input
              className="border-gray-300 border rounded-lg p-1 w-96"
              type="text"
              placeholder="Enter Email..."
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            {errors.email && (
              <p className="text-yellow-200 text-sm">{errors.email}</p>
            )}
          </div>
          <div>
            <input
              className="border-gray-300 border rounded-lg p-1 w-96"
              type="password"
              placeholder="Enter Password..."
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            {errors.password && (
              <p className="text-yellow-200 text-sm">{errors.password}</p>
            )}
          </div>
          <button
            onClick={handleRegisterUser}
            className="border-blue-400 border p-1 w-1/2 self-center rounded-md text-white bg-gradient-to-br from-blue-300 to-purple-600 cursor-pointer hover:from-blue-400 hover:to-purple-700 transition-all"
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
