var express = require('express');
var app = express();
app.get('/',(req,res)=>{
    res.send("welcome to express.js demo");
})
var server = app.listen(4200,()=>{
    var host = server.address().address;
    var port = server.address().port;
    console.log("This demo of the express js http://%s:%s",host,port)
})
