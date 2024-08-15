import React, {  useState } from 'react'
import { Link } from 'react-router-dom'
import {FaBitcoin , FaYoutube , FaSquareGithub} from 'react-icons/fa6'
import {BsInstagram} from 'react-icons/bs'
import {GiHamburgerMenu} from 'react-icons/gi'
import Darlmode from './Darlmode'


function Navbar() {
  const [show, setshow] = useState(false)

 
   
  return (
    <>
    {/* bg-gradient-to-r from-zinc-300 to-cyan-100 */}
    <nav className={` ${show ? "navbar show_navbar" : "navbar"}` }>
      <div className='logo'>
        <Link to={'/'}><img src='/logo.png' alt='logo'/></Link>

      </div>
      {/* <div> <Darlmode/> </div> */}
      <div className='links'>
        <ul >
        <li> <Darlmode/> </li>
          <li ><Link  to={'/'}>Home</Link></li>
          <li><Link to={'/donate'}>Donate US</Link></li>
          <li><Link to={'/about'}>About</Link></li>
          <li><Link to={'/contact'}>Contact</Link></li>
        </ul>

        <ul>
          <li><Link to={'/'}> <FaBitcoin/> </Link></li>
          <li><Link to={'/'}> <FaYoutube/> </Link></li>
          <li><Link to={'https://github.com/alok7139'}> <FaSquareGithub/> </Link></li>
          <li><Link to={'https://www.instagram.com/_garg_alok_/?hl=en'}> <BsInstagram/> </Link></li>
        </ul>

      </div>

      <GiHamburgerMenu className='hamburger'  onClick={() => setshow(!show)}/>

    </nav>
    </>
  )
}

export default Navbar
