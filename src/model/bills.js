const mongoose = require('mongoose')

const billSchema=new mongoose.Schema({
    patient:{
        type:String
    },
    doctor:{
        type:String,
    },
   
    bill:{
        type:String
    },
    status:{
        type:String,
    },



},{timestamps:true})

const Bill=mongoose.model('bills',billSchema)

module.exports=Bill