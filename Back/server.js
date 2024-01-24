const express = require ("express")
const app = express()
const cors = require('cors');
require('dotenv').config()
const secretKey = require("./Config/config")
const path = require('path');
const session = require('express-session');
const database = require("./Config/database")



const PORT = process.env.PORT || 5000
app.listen(PORT,function(){
    console.log(`server runing on http://localhost:${PORT}`)
})




const cookieParser = require('cookie-parser');
app.use(cors());
app.use(express.json())
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(session({
    secret: 'ISIMM',
    resave: false,
    saveUninitialized: false
  }));
  


