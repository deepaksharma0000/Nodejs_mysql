const express=require('express');
const app=express();
const con=require('./db');
var bodyParser=require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extends:true}));

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/register.html');
});
app.post("/",(req,res)=>{

    const name=req.body.name;
    const email=req.body.email;
    const mobile=req.body.number;

    con.connect((err)=>{
        if(err)throw err;
        let sql='insert into student(name,email,mobileno)values(?,?,?)';
        con.query(sql,[name,email,mobile],(err,result)=>{
            if(err)throw err;
            res.redirect('/student');
        });
    });
});

app.get('/student',(req,res)=>{
    con.connect((err)=>{
        if(err) console.log( err);

        let sql='Select * from Student';
        con.query(sql, (err,result) =>{
            if(err)throw err;
            res.render(__dirname+"/student.ejs",{student:result});
        });
    });
});

app.listen(1212,()=>console.log('port 1212.....'));