

import dotenv from 'dotenv'
dotenv.config()
import mongoose from 'mongoose'

import express from 'express'

import workoutRouter from './routes/workouts.js' 
const app = express()

const PORT = process.env.PORT || 3000
// to parse and work with json in body
app.use(express.json())
app.use((req , res , next)=>{
    console.log(req.path , req.method)
    next()
})
app.use( '/api/workouts', workoutRouter)

mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        app.listen(PORT , ()=>{
            console.log('The server is running and we are connected to database: ' , PORT)
        })
    })
    .catch((err)=>{
        console.log("Incorrect username and password")
    })

