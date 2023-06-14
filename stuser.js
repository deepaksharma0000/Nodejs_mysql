const express = require('express');
const app = express();
const con = require('./db');
const Joi = require('joi');

var bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extends: true }));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/register.html');
});

app.post('/', (req, res) => {
   var name = req.body.name;
    var email = req.body.email;
    var number = req.body.number;

    const schema = Joi.object().keys({
        name: Joi.string().min(3).max(10).required(),
        email: Joi.string().email().required(),
        number: Joi.number().required()

    });console.log(schema.validate(req.body));
  
    if (schema.validate(req.body).error) {   
           
      res.send(schema.validate(req.body).error.details); 
      return res.render('/');
      }
        else{
    con.connect((err) => {
        if (err)console.log( err);
        let sql = 'Insert into student(name,email,mobileno) values(?,?,?)';
        con.query(sql, [name, email, number], (err,result) => {
            if (err) res.send(err);
        
            console.log("validate sucessfull..") ;
               res.redirect('/student');
        });
    });
 
}
});

app.get('/student', (req, res) => {
    con.connect((err) => {
        if (err) console.log(err);
        console.log("done");
        let sql = 'select *from Student';

        con.query(sql, (err, result) => {
            if (err) throw err;
            console.log('Student list Added');
            res.render(__dirname + '/student.ejs', { student: result });
        });

    });
});
app.get('/delete', (req, res) => {

    con.connect((err) => {
        if (err) console.log(err);
        let sql = 'delete from student where id=?';
        let id = req.query.id;

        con.query(sql, [id], (err, result) => {
            if (err) throw err;
            console.log("Deleted Student Details...");
            res.redirect('/student');
        });
    });
});
app.get('/Edit', (req, res) => {
    con.connect((err) => {
        if (err) console.log(err);
        let sql = 'Select * from student where id=?';

        var id = req.query.id;

        con.query(sql, [id], (err, result) => {
            if (err) console.log(err);

            res.render(__dirname + '/update.ejs', { students: result });
        });
    });
});
app.post("/Edit", (req, res) => {

    var name = req.body.name;
    var email = req.body.email;
    var mobile = req.body.number;
    var id = req.body.id;
    con.connect((err) => {
        if (err) console.log(err);
        var sql = 'update student set name=?,email=?,mobileNo=? where id=?';
        var id = req.query.id;
        con.query(sql, [name, email, mobile, id], (err, result) => {
            if (err) throw err;
            console.log('Student updated')
            res.redirect('/student');
        });
    });
});

app.listen(1212, () => console.log('Port 1212....'));