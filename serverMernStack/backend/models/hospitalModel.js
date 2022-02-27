const mongoose = require('mongoose')

const hospitalSchema = mongoose.Schema({
    hospitalName: {
        type: String,
        required: [true, 'Please add a hospitalName value']
    },
    latitude:{
        type: String,
        required:[true,'Please add a latitude value']
    },
    longitude:{
        type: String,
        required:[true,'Please add a longitude']
    },
    province:{
        type: String,
        required:[true,'Please add a province']
    },
    district:{
        type: String,
        required:[true,'Please add a district']
    },
    subDistrict:{
        type: String,
        required:[true,'Please add a subDistrict']
    },
    address:{
        type: String,
        required:[true,'Please add a subDistrict']
    }
    
},
    {
        timestamps: true,
    }
)

module.exports = mongoose.model('Hospital', hospitalSchema)