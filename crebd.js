const mysql=require('mysql');

const con=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root'
});

con.connect((err)=>{
    if(err) throw err;
    console.log('Connected...! ');

    con.query('create database dbmy',(err,result)=>{
        if(err) throw err;
        console.log("Database Created...!");
    });
});