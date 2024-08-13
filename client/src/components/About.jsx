import React, { useEffect, useState } from 'react'
import ProgressBar from "react-scroll-progress-bar";

function About() {


  // const [theme, settheme] = useState('')

  // useEffect(() => {
  //   const gettheme = window.localStorage.getItem("theme");
  //   settheme(gettheme);
    
  // })
  // console.log(theme)
  return (
    <>
    <ProgressBar height="8" bgcolor="#F43059" duration="1"/>
    <section className="px-4 sm:px-8 md:px-12 lg:px-36 py-10 md:py-16 lg:py-20">
      
  <div className="flex flex-col-reverse lg:flex-row gap-8 lg:gap-20">
    <div className="flex-1 flex flex-col justify-center gap-8">
      <h1 className="text-xl space-x-5 overflow-hidden font-semibold sm:text-3xl lg:text-3xl text-yellow-500">Our Story</h1>
      <p className="text-base sm:text-lg lg:text-xl mt-4 lg:mt-8">
      Janseva Hub is a dynamic platform designed to bridge the gap between volunteers and those in need. Our mission is to facilitate impactful volunteerism and efficient resource management, making it easier for individuals and organizations to contribute to the well-being of communities.

      </p>
    </div>
    <div className="flex-shrink-0">
      <img
        className="w-full h-auto max-w-sm lg:max-w-md rounded-2xl"
        src="https://ischoolconnect.com/blog/wp-content/uploads/2020/08/VOLUNTEER-IN-INDIA-1200x900.png"
        alt="aboutImg"
      />
    </div>
  </div>
</section>
</>

  )
}

export default About
