
const express=require('express')
const bodyParser=require('body-parser')
const path = require('path')


const app =express()
const port=process.env.PORT||4000

require('./src/db/mongoose')
const Patient_router=require('./src/controller/patient_route')
const Doctor_router=require('./src/controller/doctor_route')
const Admin_route=require('./src/controller/admin_route')


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname,"public")))
app.use(express.json())

app.set('views', 'views')
app.set('view engine','ejs')


app.get('/', (req,res)=>{
    res.render('index')

})

app.use(Patient_router)
app.use(Doctor_router)
app.use(Admin_route)


app.listen(port,()=>{
    console.log(port)
})