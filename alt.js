const mysql=require('mysql');

const con=mysql.createConnection({
    host:'localhost',
    user:'root',
    password :'root',
    database:'dbmy'

});

con.connect((error)=>{
    if(error)throw error;
    console.log('Connected....');
    var sql='alter table employee Add column salary varchar(25)  ';
    con.query(sql,(err,result)=>{
        if(err)throw err;
        console.log('Table Altered....');
    })
})