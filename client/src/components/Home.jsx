import React from 'react'
import Hero from '../minicomponent/Hero'
import Qualities from '../minicomponent/Qualities'
import Members from '../minicomponent/question'
import ProgressBar from "react-scroll-progress-bar";

function Home() {
  return (
    <div>
      {/* Home */}
      <ProgressBar height="8" bgcolor="#F43059" duration="1"/>
      <Hero/>
      <Qualities/>
      <Members/>
      
    </div>
  )
}

export default Home
