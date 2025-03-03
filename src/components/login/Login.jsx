import axios from "axios";
import { useEffect, useState } from "react";
import { REGISTER_URL } from "../../api/api";
import { useNavigate } from "react-router";
import { ROUTES } from "../../router/const";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

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
      navigate(ROUTES.home)
    } else {
      setError("Invalid email or password.");
    }
  };

  return (
    <div className="bg-gradient-to-br from-blue-400 to-purple-500 h-screen flex justify-center items-center">
      <div className="bg-gradient-to-br from-orange-300 to-red-600 shadow-2xl rounded-2xl flex flex-col items-center justify-around w-160 h-72">
        <h1 className="font-bold text-2xl text-white">Sign In</h1>
        <div className="flex flex-col gap-5">
          <input
            className="border-gray-300 border rounded-lg p-1 w-96"
            type="text"
            placeholder="Enter Email..."
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="border-gray-300 border rounded-lg p-1 w-96"
            type="password"
            placeholder="Enter Password..."
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="border-blue-400 border p-1 w-1/2 self-center rounded-md text-white bg-gradient-to-br from-blue-200 to-purple-700 cursor-pointer"
            onClick={handleLogin}
          >
            Login
          </button>
        </div>
        {error && <p className="text-yellow-500 mt-2">{error}</p>}
        {success && <p className="text-green-500 mt-2">{success}</p>}
      </div>
    </div>
  );
}

export default Login;
