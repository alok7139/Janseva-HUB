import React, { useEffect, useState } from 'react';
import ProgressBar from 'react-scroll-progress-bar';
import axios from "axios";
import { toast } from "react-toastify";


function Donate() {
  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const [message, setmessage] = useState('');
  const [amount, setamount] = useState('');
  // const [disablebtn, setdisablebtn] = useState(false);
  
  const handlesubmit = async(amount) => {
    //  e.preventDefault();

    if(amount <= 0){
      toast.error('amount should be greater then zero')
    }

     try {
      // setdisablebtn(true);
      const {data: {key}} = await axios.get('https://janseva-hub.onrender.com/api/getkey')

      const {data:{order}} = await axios.post('https://janseva-hub.onrender.com/api/checkout' , {amount});
      

      const options = {
        key, 
        amount: order.amount, 
        currency: "INR",
        name: `${name}`, 
        description: "Test Transaction",
        image: "https://www.ntc.edu/sites/default/files/styles/full_width_16_9/public/2021-06/software-development-specialist.jpg?itok=D8qgVwxb",
        order_id: order.id, 
        // callback_url: "https://janseva-hub.onrender.com/api/payment/verified",
        // callback_url: "http://localhost:5173/paymentsuccess",
        prefill: { 
            name: "JansevaHUB", 
            email: "jansevaHUB@example.com",
            contact: "9000090000" 
        },
        notes: {
            "address": "Razorpay Corporate Office"
        },
        theme: {
            "color": "#121212"
        }
    };
    const razor = new window.Razorpay(options);
    razor.open();
    // toast.success(`Thanks for the donation ${name}`)

     setamount('');
     setname('')
     setemail('')
     setmessage("")
     


     


      
     } catch (error) {
        console.error(error);
        setdisablebtn(false);
     }


  }

  const handelform = (e) => {
    e.preventDefault()
    handlesubmit(amount)
    toast.success("Thanks for the donation");
  }
  console.log(amount)

  return (
    <>
      <ProgressBar height="8" bgcolor="#F43059" duration="1" />
      <section className={` flex justify-center  items-center p-6  min-h-screen`}>
        <div className="max-w-lg w-full bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
          <div className="mb-4">
            <img src="/logo.png" alt="logo" className="max-w-xs" />
          </div>
          <form className="w-full space-y-4"  onSubmit={handelform}>
            <input
              type="number"
              value={amount}
              onChange={(e) => setamount(e.target.value)}
              placeholder="Enter Donation Amount (INR)"
              className= { ` text-black w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2  `}
            />
            <input
              type="text"
              value={name}
              onChange={(e) => setname(e.target.value)}
              placeholder="Your Name"
              className="w-full text-black px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 "
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setemail(e.target.value)}
              placeholder="Email Address"
              className="w-full text-black px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 "
            />
            <input
              type="text"
              placeholder="Message"
              value={message}
              onChange={(e) => setmessage(e.target.value)}
              className="w-full text-black px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 "
            />
            <button
              type="submit"
              className={`w-full py-2 rounded-md text-white bg-pink-500 hover:bg-pink-600 transition-colors duration-300`}
              // disabled={disablebtn}
              // onClick={() =>  handlesubmit(amount)}
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
