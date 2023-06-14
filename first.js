const mysql = require('mysql');
 
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  port:'3306',
  database: 'mydb'
});
 
connection.connect((error) => {
  if (error) throw error;
  console.log('Connected.....');
});