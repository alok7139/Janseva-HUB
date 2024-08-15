import express from 'express'
import { message } from '../contoller/messagecontroller.js';

const router = express.Router();

router.post('/send/message' , message);


export default router;