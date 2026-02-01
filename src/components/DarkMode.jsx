import React from 'react'

const DarkMode = ({Dark,setDark}) => {
  return (
     <div className="flex items-center outline-2 w-fit outline-blue-300 rounded-full">
            <div
              onClick={() => setDark(!Dark)}
              className="relative w-18 h-10 bg-gray-300 dark:bg-gray-700 rounded-full cursor-pointer transition-colors border-2 border-white"
            >
              <span className="absolute left-2 top-1/2 -translate-y-1/2 text-yellow-400">
                ☀️
              </span>
              <span className="absolute right-2 top-1/2 -translate-y-1/2 text-blue-400">
                🌙
              </span>

              <div
                className={`absolute top-0.5 left-0.5 w-8 h-8  ${
                  Dark ? "bg-white" : "bg-gray-700"
                } rounded-full shadow-lg  transition-transform duration-300 ${
                  Dark ? "translate-x-8" : "translate-x-0"
                }`}
              ></div>
            </div>
          </div>
  )
}

export default DarkMode