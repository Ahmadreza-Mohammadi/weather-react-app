function SignUp() {
  return (
    <div className="bg-gradient-to-br from-blue-400 to-purple-500 h-screen flex justify-center items-center">
      <div className="bg-gradient-to-br from-orange-300 to-red-600 shadow-2xl rounded-2xl flex flex-col items-center justify-around w-160 h-72">
        <h1 className="font-bold text-2xl text-white ">Register</h1>
        <div className="flex flex-col gap-5">
          <input
            className="border-gray-300 border rounded-lg p-1 w-96"
            type="text"
            placeholder="Enter Email..."
          />
          <input
            className="border-gray-300 border rounded-lg p-1 w-96"
            type="text"
            placeholder="Enter Password..."
          />
          <button className="border-blue-400 border p-1 w-1/2 self-center rounded-md text-white bg-gradient-to-br from-blue-200 to-purple-700 cursor-pointer">
            Register
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
