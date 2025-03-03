function Footer() {
  return (
    <div className="bg-gray-800/80 mb-2 backdrop-blur-md w-[780px] p-5 flex justify-between items-center h-16 rounded-lg shadow-lg mt-1">
      <div className="flex gap-4 text-white">
        <span className="hover:text-blue-300 cursor-pointer transition-colors">
          Contact Us
        </span>
        <span className="hover:text-blue-300 cursor-pointer transition-colors">
          Term of Use
        </span>
        <span className="hover:text-blue-300 cursor-pointer transition-colors">
          Privacy Policy
        </span>
      </div>
      <div className="text-white text-sm">
        © 2025 Weather App. All rights reserved.{" "}
      </div>
    </div>
  );
}

export default Footer;
