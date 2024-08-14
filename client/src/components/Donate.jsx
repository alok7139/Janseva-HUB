import React, { useState } from 'react';
import ProgressBar from 'react-scroll-progress-bar';

function Donate() {
  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const [message, setmessage] = useState('');
  const [amount, setamount] = useState('');
  const [disablebtn, setdisablebtn] = useState(false);

  return (
    <>
      <ProgressBar height="8" bgcolor="#F43059" duration="1" />
      <section className="flex justify-center items-center p-6 bg-gray-100 min-h-screen">
        <div className="max-w-lg w-full bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
          <div className="mb-4">
            <img src="/logo.png" alt="logo" className="max-w-xs" />
          </div>
          <form className="w-full space-y-4">
            <input
              type="number"
              value={amount}
              onChange={(e) => setamount(e.target.value)}
              placeholder="Enter Donation Amount (INR)"
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
            <input
              type="text"
              value={name}
              onChange={(e) => setname(e.target.value)}
              placeholder="Your Name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setemail(e.target.value)}
              placeholder="Email Address"
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
            <input
              type="text"
              placeholder="Message"
              value={message}
              onChange={(e) => setmessage(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
            <button
              type="submit"
              className={`w-full py-2 rounded-md text-white ${disablebtn ? 'bg-gray-400' : 'bg-pink-500 hover:bg-pink-600'} transition-colors duration-300`}
              disabled={disablebtn}
            >
              Donate {amount ? `${amount} RS` : "0"}
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

export default Donate;
