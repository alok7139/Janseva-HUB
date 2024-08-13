import React, { useState }  from 'react'
import {Audio} from 'react-loader-spinner'

const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };

function LOader() {

 


  return (
    <>
    <div style={{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        height:"100vh",
        width:"100vw"
    }}>
    <Audio
  height="50"
  width="80"
  radius="9"
  color="blue"
  ariaLabel="loading"
  wrapperStyle
  wrapperClass

/>
    </div>
    </>
  )
}

export default LOader
