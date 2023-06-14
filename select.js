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

    let sql='select * from emp';
    con.query(sql,(err,result)=>{
        if(err) throw err;
        console.log(result);
    })
})