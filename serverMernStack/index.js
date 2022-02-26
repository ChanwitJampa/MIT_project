const express = require('express')
const dotenv = require('dotenv').config()
const mongoose=require("mongoose")
const colors = require('colors')

const connectDB = require('./backend/config/db')

connectDB()

const {errorHandler} = require('./backend/middleware/errorMiddleware')

const port = 5000
const app = express()

// mongoose.connect(process.env.DATABASE,{
//     useNewUrlParser:true,
//     useUnifiedTopology:false
// })
// .then(()=>console.log("เชื่อมต่อเรียบร้อย"))
// .catch((error)=>console.log(error))

app.use(express.json())
app.use(express.urlencoded({ extended : false}))
// app.use(express.raw())

app.use('/api/hospitals',require('./backend/routes/hospitalsRoutes'))
app.use(errorHandler)

app.listen(port,()=> console.log('server startedon port',port))