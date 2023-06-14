let express= require('express');
const con= require('./db')
let app= express();

app.listen(3000,function(req,res){

    console.log("Start Server __ this port ",3000)
    con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
      });
})