const express = require('express');
const dotenv = require('dotenv');   //used to share source code without credentials 
const morgan = require('morgan');   //used to console.log get request 
const bodyparser = require("body-parser");  //Body-parser is the Node.js body parsing middleware. It is responsible for parsing the incoming request bodies in a middleware before you handle it.
const path = require('path');

const connectDB = require('./server/database/connection');

const app = express();


dotenv.config({path:'config.env'})
const PORT = process.env.PORT || 8000;

// parser request to body-parser
app.use(bodyparser.urlencoded({extended:true}))

// For logging Request
app.use(morgan('tiny'));   //tiny is tocken

// mongoDB connection 
connectDB();

// set view engine
app.set("view engine", "ejs") //instead of esj u can use html or pug
// app.set("views",path.resolve(__dirname,"views/ejs")) ejs is folder in which you have ejs files

//load assets
app.use('/css',express.static(path.resolve(__dirname,"assets/css"))) //css/style.css
app.use('/js',express.static(path.resolve(__dirname,"assets/js")))

app.use('/',require('./server/routes/router'));

app.listen(PORT, ()=>{console.log(`Application is running on http://localhost:${PORT}`);});