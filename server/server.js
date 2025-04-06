import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import cors from 'cors'
import dotenv from 'dotenv';
import route from './routes/userRoute.js';
dotenv.config();


const app = express()
app.use(bodyParser.json())
app.use(cors())

const PORT = process.env.PORT || 7000;
const URL = process.env.MONGO_URL

mongoose.connect(URL).then(()=>{
    console.log('DB connected Successfully');
    
    app.listen(PORT,()=>{
        console.log(`server is running on port: ${PORT}`);
    })
}).catch(err=>console.log(err));

app.use("/api",route)