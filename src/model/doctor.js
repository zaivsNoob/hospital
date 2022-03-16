
const mongoose = require('mongoose')


const doctorSchema=new mongoose.Schema({
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
    consultation:{
        type:String
    },
    password:{
        type:String,
        // required:true

    },
    email:{
        type:String,
        // unique:true
    },

    speciality:{
        type:String
    },
    qualification:{
        type:String
    },
    docId:{
        type:String
    },
    fees:{
        type:String
    }

    



    
},{
    timestamps:true
})


const Doctor =mongoose.model('doctor',doctorSchema)





module.exports=Doctor