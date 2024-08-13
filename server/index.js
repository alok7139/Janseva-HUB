import express from 'express'
import cors from 'cors'
import { configDotenv } from 'dotenv'
import { dbconnection } from './database/dbconnection.js';
import messagerouter from './routes/messageroutes.js'

const app = express();
configDotenv({path : './.env'})
app.use(cors({
    methods: ["GET" , "POST" , "PUT" , "DELETE"],
    credentials:true,
    origin: [process.env.FRONTEND_URL]
}))

// for parsing the json data
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/user" , messagerouter);

dbconnection();
export default app;