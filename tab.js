const mysql=require('mysql');

const con=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'dbmy'
});

con.connect((err)=>{
    if(err)throw err;
    console.log('conected...');
    const sql='create table Employee(id int,Name varchar(55),salary int)';
    con.query(sql,(err,result)=>{
        if(err) throw err;
        console.log('table created....');
    });
});