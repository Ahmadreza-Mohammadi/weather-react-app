import React from 'react'

function FavoritesBar() {
  return (
    <div className="bg-gray-800/80 backdrop-blur-md w-[780px] p-5 flex justify-between items-center h-20 rounded-lg shadow-lg">
    <h1 className="text-white font-bold text-2xl ">Recent Searchs History</h1>
    <img
      className="h-8"
      src="https://www.svgrepo.com/show/406037/last-track-button.svg"
      alt=""
    />
  </div>
  )
}

export default FavoritesBar