const mysql=require('mysql');

const con=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'dbmy'
});

con.connect((err)=>{
    if(err) throw err;
    console.log('connected...!');
   
    const sql='insert into emp values(1,"Ram",21)';
    con.query(sql,(err)=>{
        if(err) throw err;
        console.log('1 Record Insereted...!');
    });
});