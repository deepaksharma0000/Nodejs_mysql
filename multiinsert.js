const mysql=require('mysql2');

const con=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'dbmy'
});

con.connect((err)=>{
    if(err) throw err;
    console.log('connected....!');

    var sql='insert into employee values ?';
    var values=[
        [2,"Shyam",22],
        [3,"Rakhi",19],
        [4,"Priya",23],
        [5,"Ravi",21]
    ];
    con.query(sql,[values],(err,result)=>{
        if(err)throw err;
        console.log(result);
    });
});