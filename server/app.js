import express from 'express'
import cors from 'cors'
import { configDotenv } from 'dotenv'
import { dbconnection } from './database/dbconnection.js';
import messagerouter from './routes/messageroutes.js'
import paymentrouter from './routes/paymentroute.js'

const app = express();
configDotenv({path : './.env'})
app.use(cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["GET" , "POST" , "PUT" , "DELETE"],
    credentials:true,
    
}))

// for parsing the json data
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/user" , messagerouter);
app.use('/api/v1' , paymentrouter);

app.get('/api/getkey' , (req,res) => res.status(200).json({key:process.env.RAZORPAY_API_KEY}))

dbconnection();
export default app;