import React, { useState , useEffect } from 'react'
import ProgressBar from "react-scroll-progress-bar";
import axios from "axios";
import { toast } from "react-toastify";

function Contact() {
  const [name, setname] = useState("")
  const [email, setemail] = useState("")
  const [phone, setphone] = useState("")
  const [message, setmessage] = useState("")

  const handlemessage = async(e) => {
    e.preventDefault();

    await axios.post("http://localhost:3000/user/send/message" , {name,email,phone , message} , {withCredentials:true , headers: {"Content-Type" : "application/json"}})
    .then((res) => {
      setname("")
      setemail("")
      setphone("")
      setmessage("")
      toast.success(res.data.message);
    })
    .catch((error) => {
      toast.error(error.response.data.message);
    })
  }






 

  return (
    <>
    <ProgressBar height="8" bgcolor="#F43059" duration="1"/>
    <section className="px-4 sm:px-10 py-6 sm:py-10">
  <div className="flex flex-col justify-center items-center">
    <form className="w-full max-w-lg" onSubmit={handlemessage}>
      <h2 className="text-center mb-6 sm:mb-9 mt-5 text-2xl sm:text-4xl font-bold overflow-hidden">CONTACT US</h2>
      <div className={`flex flex-col sm:flex-row gap-4 sm:gap-5 mb-6 sm:mb-7`} >
        <input
          type="text"
          value={name}
          placeholder="Your Name"
          className={`text-black w-full p-2 border border-gray-300 bg-white rounded-lg`}
          onChange={(e) => setname(e.target.value)} 
        />
        <input
          type="email"
          value={email}
          placeholder="Your Email"
          className={`text-black w-full p-2 border border-gray-300 bg-white rounded-lg`}
          onChange={(e) => setemail(e.target.value)}
        />
        <input
          type="number"
          value={phone}
          placeholder="Phone Number"
          className={`text-black overflow-hidden w-full p-2 border border-gray-300 bg-white rounded-lg`}
          onChange={(e) => setphone(e.target.value)}
        />
      </div>
      <textarea
        rows="4"
        value={message}
        placeholder="Message"
        className="text-black w-full p-2 mb-6 border border-gray-300 rounded-lg"
        onChange={(e) => setmessage(e.target.value)}
      />
      <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400" type="submit">
        Send Message
      </button>
    </form>
  </div>
</section>
</>

  )
}

export default Contact
