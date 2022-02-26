const mongoose = require('mongoose')

const hospitalSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add a text value']
    },
    latitude:{
        type: String,
        required:[true,'Please add a latitude value']
    },
    longitude:{
        type: String,
        required:[true,'Please add a longitude']
    }
},
    {
        timestamps: true,
    }
)

module.exports = mongoose.model('Hospital', hospitalSchema)