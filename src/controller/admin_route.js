const express = require('express')
const router=new express.Router()


require('../db/mongoose')
const Patient=require('../model/patient')
const Doctor=require('../model/doctor')
const Appointment=require('../model/appoinments')
const Bill=require('../model/bills')

router.get('/admin/dashboard',async(req,res)=>{
    const doctor=await Doctor.find({})
    const appointment=await Appointment.find({})


    try {
        
        res.render('admin_dashboard',{Doctor:doctor,Appointment:appointment})
        
    } catch (e) {
        res.send(e)
    }



  
} )

router.post('/bill',async(req,res)=>{
    const bill=new Bill(req.body)
    try {
        await bill.save()

        res.redirect('/admin/dashboard')

        
    } catch (e) {
        res.send(e)
    }

})

module.exports=router