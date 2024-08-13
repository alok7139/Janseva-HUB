import React, { useState } from 'react'
import ProgressBar from "react-scroll-progress-bar";

function Donate() {
  const [name, setname] = useState('')
  const [email, setemail] = useState('')
  const [message, setmessage] = useState('')
  const [amount, setamount] = useState('')
  const [disablebtn, setdisablebtn] = useState(false)



  return (
    <>
    <ProgressBar height="8" bgcolor="#F43059" duration="1"/>
     <section className="donate">
      <form >
        <div>
          <img src="/logo.png" alt="logo" />
        </div>
        <div>
          {/* <label>Show your love for Needy People</label> */}
          <input
            type="number"
            value={amount}
            onChange={(e) => setamount(e.target.value)}
            placeholder="Enter Donation Amount (INR)"
          />
        </div>
        <input
          type="text"
          value={name}
          onChange={(e) => setname(e.target.value)}
          placeholder="Your Name"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setemail(e.target.value)}
          placeholder="Email Address"
        />
        <input
          type="text"
          placeholder="Message"
          value={message}
          onChange={(e) => setmessage(e.target.value)}
        />
        <button type="submit" className="btn" disabled={disablebtn}>
          Donate {amount ? `${amount} RS` : "0"}
        </button>
      </form>
    </section>
    </>
  )
}

export default Donate
