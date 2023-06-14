const express=require('express');
const app=express(); 

var bodyParser=require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extends:true}));


//app.set('view-engine','ejs');
// app.use(express.urlencoded({extended :false}));

app.get('/',(req,res)=>{
    res.send('<h1>Server page</h1>');
});

app.get('/login',(req,res)=>{
    res.render("login.ejs");
});
 app.get('/register',(req,res)=>{
    res.render("register.ejs");
 }); 

 app.post('/register',(req,res)=>{
    const name=req.body.name;
 });


app.listen(1212,()=>console.log('port 1212....!'));