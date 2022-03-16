const express = require('express')
const router=new express.Router()

require('../db/mongoose')
const Patient=require('../model/patient')
const Doctor=require('../model/doctor')
const Appointment=require('../model/appoinments')
router.get('/patient',(req,res)=>{
  // const doctor=Doctor.find({})
  // res.send(doctor)
  res.render('patient')
})

router.get('/login/patient',(req,res)=>{
  res.render('patient-login')

})


router.post('/login/patient',async(req,res)=>{
  const patient = await Patient.findOne({email:req.body.email,password:req.body.password})

  res.redirect('/doctor-list')

})


router.post('/patient',async (req,res)=>{
  const patient= new Patient(req.body)

    
    await patient.save()
  

  res.redirect('/doctor-list')

})

router.get('/doctor-list',async(req,res)=>{

  const doctor=await Doctor.find({})

  try {
    res.render('doctor-list',{Doctor:doctor})
  } catch (e) {
    res.send(e)
  }

 
})

router.post('/doctor-list',async(req,res)=>{
    const appointment=new Appointment(req.body)
  
    await appointment.save()

    res.redirect('/')
  
})



module.exports=router