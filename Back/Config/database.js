const express = require("express");
const mongoose = require("mongoose");

const app = express();

const url = "mongodb+srv://mestirimouna2:4MOQJbguIcYHVjez@cluster0.xbpxrbq.mongodb.net/ISIMMDB?retryWrites=false"

async function connect() {
    try {
        await mongoose.connect(url);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
}


connect();
