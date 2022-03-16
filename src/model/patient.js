
const mongoose = require('mongoose')


const patientSchema=new mongoose.Schema({
    name:{
        type:String,
        limit:30,
        // required:true
    },
    age:{
        type:Number
    },
    gender:{
        type:String
    },
    address:{
        type:String
    },
    password:{
        type:String,
        // required:true

    },
    email:{
        type:String,
        // unique:true
    }


    
},{
    timestamps:true
})


const Patient =mongoose.model('patient',patientSchema)



module.exports=Patient