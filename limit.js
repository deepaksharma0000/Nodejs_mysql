const mysql=require('mysql2');

const con=mysql.createConnection({
    port:'loacalhost',
    user:'root',
    password:'root',
    database:'dbmy'
});

con.connect((err)=>{
    if(err)throw err;
    console.log('Connected..........');

    sql='select * from emp limit 3,2';

    con.query(sql,(err,result)=>{
        if(err)throw err;
        console.log(result);
    });
});