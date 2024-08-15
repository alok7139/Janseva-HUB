import crypto from 'crypto'
import { Payment } from "../models/paymentModel.js";
import { instance } from '../server.js';

export const checkout = async(req, res) => {
    try {
        const options = {
            amount: Number(req.body.amount * 100),
            currency: "INR"
        };
        console.log(options);

        const order = await instance.orders.create(options); // Await the order creation
        console.log(1);
        console.log(order);

        res.status(200).json({
            success: true,
            order,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Order creation failed",
            error: error.message,
        });
    }
};


export const Paymentverified =async (req,res) => {

    const { razorpay_order_id, razorpay_payment_id, razorpay_signature , name , email ,phone ,message } =
    req.body;

  const body = razorpay_order_id + "|" + razorpay_payment_id;

  const expectedSignature = crypto
    .createHmac("sha256", process.env.RAZORPAY_API_SECRET)
    .update(body.toString())
    .digest("hex");

    // console.log("sig recieved" , razorpay_signature);
    // console.log("sig generated" , expectedSignature);



  const isAuthentic = expectedSignature === razorpay_signature;

  if (isAuthentic) {
    // Database comes here

    await Payment.create({
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
      name , email ,phone ,message
    });

    res.redirect(
      `http://localhost:5173/paymentsuccess?reference=${razorpay_payment_id}`
    );
  } else {
    res.status(400).json({
      success: false,
    });
  }
}
