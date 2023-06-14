const express=require('express');
const app=express();
const con=require('./db')

var bodyParser = require('body-parser');
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extends :true}));

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/register.html');
});
 app.post('/',(req,res)=>{
    var name=req.body.name;
    var email=req.body.email;
    var mobile=req.body.number;

    con.connect((err)=>{
        if(err)throw err;
       var sql='insert into student(name,Email,MobileNo) values(?,?,?)';
       // var sql='insert into student(name,Email,MobileNo) values(`${app.name} ${app.email} ${app.mobile}`)';
        con.query(sql,[name,email,mobile],(err,result)=>{
          if(err)throw err;
            res.send('Student register Succesfully.....'+result.insertId);
        });
    });
 }).listen(1212,()=>console.log("Port 1212....."));













