const express = require("express");
const mongoose = require("mongoose");

const app = express();

const url = "mongodb+srv://mestirimouna2:<password>@cluster0.xbpxrbq.mongodb.net/?retryWrites=true&w=majority"

async function connect() {
    try {
        await mongoose.connect(url);
        console.log("connect to mongoose");
    } catch (error){
        console.error(error);
    }
}

connect();
