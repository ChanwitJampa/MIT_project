const express = require('express')
const dotenv = require('dotenv').config()
const mongoose=require("mongoose")
const colors = require('colors')

const connectDB = require('./backend/config/db')


const multer = require('multer');


connectDB()

const {errorHandler} = require('./backend/middleware/errorMiddleware')

const port = 5000
const app = express()


var cors = require('cors');
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended : false}))



app.use('/api/hospitals',require('./backend/routes/hospitalsRoutes'))
app.use('/api/announces',require('./backend/routes/announceRoutes'))
app.use('/api/Users',require('./backend/routes/userRouters'))

// app.post('/api/sayHello', (request, response) => {
//     let a = request.body.a;
//     let b = request.body.b;

//     let c = parseInt(a) + parseInt(b);
//     response.send('Result : '+c);
//     console.log('Result : '+c);
// });


app.use(errorHandler)

app.listen(port,()=> console.log('server startedon port',port))