const express = require('express')
const app = express()

const port = 3000



const TimeMe =(req, res , next)=>{
console.log('Time :' , Date.now() , 'Request Type:', req.method  , 'path :' ,req.path)
next()
}




app.get('/' ,TimeMe , (req , res)=> 
{
    // console.table({method : req.method , path : req.path })
    res.sendFile(__dirname +'/home.html')
} )


app.get('/contact' ,TimeMe , (req , res)=> {res.sendFile(__dirname +'/contact.html')}  )


app.get('/service' ,TimeMe , (req , res)=> {res.sendFile(__dirname +'/service.html')}  )


app.get('/team' ,TimeMe , (req , res)=> {res.sendFile(__dirname +'/team.html')}  )

app.get('/style.css' , (req , res)=> {res.sendFile(__dirname +'/style.css')}  )



app.listen(port , ()=>console.log(`server run in ${port}`))



