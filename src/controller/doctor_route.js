const express = require('express')
const router=new express.Router()

require('../db/mongoose')
const Doctor=require('../model/doctor')
const Appointment=require('../model/appoinments')


router.get('/doctor',(req,res)=>{
    res.render('doctor')
})

router.get('/login/doctor',(req,res)=>{
    res.render('doctor-login')

})



router.post('/doctor',async (req,res)=>{
    const doctor= new Doctor(req.body)

      await doctor.save()

    res.render('welcome')

})

router.post('/login/doctor',async(req,res)=>{
  const doc = await Doctor.findOne({email:req.body.email,password:req.body.password})
 const appointment=await Appointment.find({docId:doc.docId})
  
 res.render('appoinment',{appointment})
})


router.get('/appointment',async (req,res)=>{

  const appointment=await Appointment.find({})
  try {
    res.render('appoinment',{appointment})
  } catch (e) {
    res.send(e)
  }

})

module.exports=router