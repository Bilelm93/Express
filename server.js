const express = require('express')
const app = express()

const port = 3000

const TimeMe =(req, res , next)=>{
console.log('Time :' , Date.now())
next()
}



app.get('/' ,TimeMe ,  (req , res)=> 
{
    console.table({method : req.method , path : req.path })
    res.sendFile(__dirname +'/home.html')
} )


app.get('/contact' , (req , res)=> {res.sendFile(__dirname +'/contact.html')}  )


app.get('/service' , (req , res)=> {res.sendFile(__dirname +'/service.html')}  )


app.get('/team' , (req , res)=> {res.sendFile(__dirname +'/team.html')}  )

app.get('/style.css' , (req , res)=> {res.sendFile(__dirname +'/style.css')}  )



app.listen(port , ()=>console.log(`server run in ${port}`))



