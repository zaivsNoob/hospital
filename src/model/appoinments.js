const mongoose = require('mongoose')

const appointSchema=new mongoose.Schema({
    patient:{
        type:String
    },
    problem:{
        type:String,
    },
    previous:{
        type:String,
    },
    docId:{
        type:String
    }



},{timestamps:true})

const Appointment=mongoose.model('appointments',appointSchema)

module.exports=Appointment