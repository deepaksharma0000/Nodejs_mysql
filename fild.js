const mysql=require('mysql2');

const con=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'dbmy'
});

con.connect((err)=>{
    if(err)throw err;
    console.log('Connected......');

    let sql='select id ,name from emp';
    con.query(sql,(err,result,fields)=>{
        if(err)throw err;
        console.log(fields);
    })
})