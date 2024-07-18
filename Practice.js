const express=require('express')
const app=express()
const PORT=3500
const path=require('path')
const Practicelog=require('./Practicelog')


app.use((req,res,next)=>{
    Practicelog(`${req.url} \t ${req.method} `)
    console.log(`${req.url} \t ${req.method} `)
    next()
})

app.get('/' || '/Home(.html)',(req,res)=>{
    res.sendFile(path.join(__dirname,"HTML","Home.html"))
})

app.get('/Form(.html)?',(req,res)=>{
    res.sendFile(path.join(__dirname,"HTML","Form.html"))
    const url=req.url
    if(url=='/Thanks(.html)'){
        res.sendFile(path.join(__dirname,"HTML","Thanks.html"))
    }
    
})

app.get('/Gallery(.html)?',(req,res)=>{
    res.sendFile(path.join(__dirname,"HTML","Gallery.html"))
})


// app.get('/Thanks(.html)?',(req,res)=>{
//     res.sendFile(path.join(__dirname,"HTML","Thanks.html"))
// })

app.get('/*',(req,res)=>{
    res.sendFile(path.join(__dirname, "HTML", "Error.html"))
})

app.listen(PORT)