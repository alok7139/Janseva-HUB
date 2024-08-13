import React from 'react'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <section className='hero'>
      <div className='banner'>
         <h1>Volunteers</h1>
         <h3>Needed</h3>
         <p>Janseva Hub is grateful for the support of our dedicated volunteers. Your involvement is crucial to our success and helps us create a stronger, more connected community. Join us in our mission to make a difference!</p>

         <Link to={'donate'} className='btn'>Donate Now</Link>

      </div>
      <div className='banner'>
        <img src='https://remoteco.s3.amazonaws.com/wp-content/uploads/2015/10/pay-it-forward-with-remote-volunteers.png' alt='hero'/>

      </div>

    </section>
  )
}

export default Hero
