var express = require('express');
var app = express();
app.get('/example/b', (req,res,next)=>{
console.log('the response will be sent by the next function');
next()
}, (req,res)=>{
    res.send('Hello from B!')
})
app.listen(8000);
