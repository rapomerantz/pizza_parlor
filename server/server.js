var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var port = process.env.PORT || 5000;
const pizzaRouter = require('./routes/pizza.router');

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for angular requests
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('build'));


/** ---------- EXPRESS ROUTES ---------- **/
app.use('/pizza', pizzaRouter)

/** ---------- START SERVER ---------- **/
app.listen(port, function () {
    console.log('Listening on port: ', port);
});