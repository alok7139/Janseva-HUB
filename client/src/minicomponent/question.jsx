import React, { useState , useEffect } from 'react'
import data from './data'
import { CiCirclePlus } from "react-icons/ci";
import { RxCrossCircled } from "react-icons/rx";

{/* <CiCirclePlus /> */}
{/* <RxCrossCircled /> */}

function Members() {
  const [currpick, setcurrpick] = useState(null);
  const [theme, settheme] = useState('')

  const handleaccordion = (currid) => {
    setcurrpick(currpick === currid ? null : currid);
  }

  

  useEffect(() => {
    const gettheme = window.localStorage.getItem("theme");
    settheme(gettheme);
    
  })
  // console.log(theme)
  
  return (
    <div className="px-4 sm:px-8 py-6">
    <div className="text-center sm:text-left">
      <h2 className="text-2xl sm:text-3xl overflow-hidden font-semibold text-blue-900">
        Janseva Hub :
        <span className="block text-xl sm:text-2xl overflow-hidden font-medium mt-1">
          Facts, Impact and Contributions
        </span>
      </h2>
    </div>

    {data && data.length > 0 ? (
      data.map((item, index) => (
        <div key={index} className="mt-6">
          <button
              onClick={() => handleaccordion(index)}
              className="w-full flex items-center justify-between p-4 rounded-lg text-lg sm:text-xl font-medium border border-gray-300 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <span className="flex-1 text-left">{item.question}</span>
              <div className="ml-4 flex-shrink-0">
                {currpick === index ? (
                  <RxCrossCircled size={30} />
                ) : (
                  <CiCirclePlus size={30} />
                )}
              </div> 
            </button>
          {currpick === index && (
            <div className={`mt-2 p-4 ${theme === 'dark' ? "bg-slate-900" : "bg-slate-200"} font-mono text-pretty  rounded-lg text-sm sm:text-base`}>
              {item.answer}
            </div>
          )}
        </div>
      ))
    ) : (
      <p className={`text-center  text-gray-500`}>No data available</p>
    )}
  </div>
  )
}

export default Members
