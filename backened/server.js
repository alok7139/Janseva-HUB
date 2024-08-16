import app from './app.js'
import Razorpay from 'razorpay'
import { message } from './contoller/messagecontroller.js';

export const instance = new Razorpay({
    key_id: process.env.RAZORPAY_API_KEY,
    key_secret: process.env.RAZORPAY_API_SECRET,
  });

app.get("/" , (req,res) => {
  res.json({message: "server is running"})
})  


app.listen(process.env.PORT , () => {
    console.log(`server is listening at ${process.env.PORT}`);
})