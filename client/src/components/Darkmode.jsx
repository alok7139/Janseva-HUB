import React, { useEffect, useState } from 'react'
import { BsBorder } from 'react-icons/bs';
import { MdOutlineDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";

function Darlmode() {

  const [isdarkmode, setisdarkmode] = useState(() => 
    window.localStorage.getItem("theme") === 'dark'
  )

  useEffect(() => {
    document.body.className = isdarkmode ? 'dark-mode' : 'light-mode';
    window.localStorage.setItem("theme" , isdarkmode ? "dark" : "light"); 
  } , [isdarkmode]);

  const handlemode = () => {
    setisdarkmode(!isdarkmode);
  }



  return (
    <div>
       {
        isdarkmode ? <button className={`sm:p-1 border-2 rounded-lg p-1 bg-white`}><MdOutlineLightMode style={{color:"black"}} className='theme-toggle' onClick={handlemode} size={30}/></button>
        : <button className={`sm:p-1 rounded-lg border p-1 bg-black`}><MdOutlineDarkMode onClick={handlemode} className='theme-toggle'  size={30}/></button>
       }
    </div>
  )
}

export default Darlmode
