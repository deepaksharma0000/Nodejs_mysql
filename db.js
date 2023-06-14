var mysql = require('mysql');

let con= mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database:"dbmy"
});

module.exports=con