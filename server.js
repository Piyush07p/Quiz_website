const express=require('express');
const app=express();
const path= require('path');
const bcrypt=require('bcrypt')
const Models=require('./db/collections')

app.use('/public',express.static('public'))
app.use('/images',express.static('images'))


app.use(express.json());
app.use(express.urlencoded({extended:false}))

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'views','index.html'))

})

app.get('/register',(req,res)=>{
    res.sendFile(path.join(__dirname,'views','sign_up.html'))
})

app.get('/login',(req,res)=>{
    res.sendFile(path.join(__dirname,'views','student_login.html'))
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

app.post('/register',async (req,res)=>{

    try{
        const hashedPass= await bcrypt.hash(req.body.password,5);
               const registration= new  Models({
                   name:req.body.name,
                   email:req.body.email,
                   password:hashedPass
               })
            const registered= await registration.save()
            res.status(201).redirect('/')
    
      }
      catch(e){
               res.status(400).send(e)            
      }
    
})

app.post('/login',async (req,res)=>{
        try{
         email=req.body.email;
         password=req.body.password;
     
         const useremail= await Models.findOne({email:email})
         
         const isMatch= await bcrypt.compare(password,useremail.password);
     
         if(isMatch)
         {
             res.redirect('/');
     
         }
         
         else{
             res.send("invalid credentials try one more time");
          }
     
        }
        catch(e){
                 console.log(e);     
        }
 })



const port=process.env.PORT||5500;
app.listen(port,()=>{
    console.log(`the server started at port ${port}`);
})