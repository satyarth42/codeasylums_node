const express = require('express');
const morgan = require('morgan');
const parser = require('body-parser');
const app = express();
const port = 3001;

// let count = 0;
const users = require('./routes/users');
const products = require('./routes/products');

app.use(morgan('dev'));
app.use(parser.json());
app.use(parser.urlencoded({extended:true}));

app.use('*',function(req,res,next){
    res.set('Access-Control-Allow-Origin','*');
    res.set('Access-Control-Allow-Headers','content-type');
    next();
});

app.use('/users',users);
app.use('/products',products);
// app.get('*',function(req,res,next){
//     count++;
//     next();
// });

// app.get('/',function(req,res){
//     res.send("hello world!").status(200);
// });

// app.get('/test',function(req,res){
//     res.send("testing").status(204);
// });

// app.get('/count',function(req,res){
//     res.send(count.toString()).status(200);
// });

app.listen(port,function(){
    console.log(`Server running on ${port}`);
});