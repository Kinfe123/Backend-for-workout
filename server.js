

import dotenv from 'dotenv'
dotenv.config()
import mongoose from 'mongoose'

import express from 'express'

import workoutRouter from './routes/workouts.js' 
const app = express()

const PORT = process.env.PORT 
// to parse and work with json in body
app.use(express.json())
app.use((req , res , next)=>{
    console.log(req.path , req.method)
    next()
})
app.use( '/api/workouts', workoutRouter)

mongoose.connect("mongodb+srv://kinfishnew:kinfe191425@mernapp.pe83fvq.mongodb.net/?retryWrites=true&w=majority")
    .then(()=>{
        app.listen(PORT , ()=>{
            console.log('The server is running and we are connected to database: ' , PORT)
        })
    })
    .catch((err)=>{
        console.log("Incorrect username and password")
    })

