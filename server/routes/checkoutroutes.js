import express from 'express'
import { checkout } from '../contoller/checkout.js';


const router = express.Router();

router.post('/checkout' , checkout);




export default router;