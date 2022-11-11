const express=require('express');
const app=express();
const path= require('path');

app.use('/public',express.static('public'))
app.use('/images',express.static('images'))

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'views','index.html'))

})

app.get('/login',(req,res)=>{
    res.sendFile(path.join(__dirname,'views','sign_up.html'))
})

app.get('/practice',(req,res)=>{
    res.sendFile(path.join(__dirname,'views','practice.html'))
})

app.get('/compete',(req,res)=>{
    res.sendFile(path.join(__dirname,'views','compete.html'))
})

app.get('/cat',(req,res)=>{
    res.sendFile(path.join(__dirname,'views','cat.html'))
})

app.get('/demo',(req,res)=>{
    res.sendFile(path.join(__dirname,'views','demo.html'))
})



const port=5500;
app.listen(port,()=>{
    console.log(`the server started at port ${port}`);
})