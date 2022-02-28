const express = require('express')
const dotenv = require('dotenv').config()
const mongoose = require("mongoose")
const colors = require('colors')
const axios = require('axios')
const connectDB = require('./backend/config/db')
const auth = require('./backend/middleware/auth')

const multer = require('multer');


connectDB()

const { errorHandler } = require('./backend/middleware/errorMiddleware')

const port = 5000
const app = express()


var cors = require('cors');
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: false }))



app.use('/api/hospitals', require('./backend/routes/hospitalsRoutes'))
app.use('/api/announces', require('./backend/routes/announceRoutes'))
app.use('/api/Users', require('./backend/routes/userRouters'))
app.use('/api/login', require('./backend/routes/loginRouters'))

app.get('/api/province', (req, res) => {
    if(!req.body.provinceName){
        res.status(400).send("give me province name")
        return ""
    }
    
    var name=req.body.provinceName
    axios.get(`https://covid19.ddc.moph.go.th/api/Cases/timeline-cases-by-provinces`).then((response) => {
            var provinces123=[];
            var check =0
            var count = 0;
            var totalCase=0
            var lengthData =  response.data.length
            console.log("lengthData: "+lengthData)
            var j=1
            for(var i=0;i< lengthData ;i=i+j){
                console.log(i+" || "+ count)
                if(i>80 && check===0 ){
                    break
                }
                if(count>30){
                    console.log("break")
                    break;
                   
                }
                if(response.data[lengthData-1-i].province===name)
                {
                    check=1
                    j=78
                    count=count+1
                    response.data[lengthData-1-i]
                    totalCase=response.data[lengthData-1-i].new_case + totalCase
                    provinces123.push(response.data[lengthData-1-i])
                }
            }
       
            res.status(200).json(totalCase)
        })
})

// app.post('/api/sayHello', (request, response) => {
//     let a = request.body.a;
//     let b = request.body.b;

//     let c = parseInt(a) + parseInt(b);
//     response.send('Result : '+c);
//     console.log('Result : '+c);
// });


app.use(errorHandler)

app.listen(port, () => console.log('server startedon port', port))