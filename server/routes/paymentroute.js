import express from 'express'
import { checkout , Paymentverified } from '../contoller/paymentcontroller.js'

const router = express.Router();

router.post("/checkout" , checkout);
router.post("/payment/verified" , Paymentverified)

export default router;