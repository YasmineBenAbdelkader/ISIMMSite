const express = require("express");
const mongoose = require("mongoose");

const app = express();

const url = "mongodb+srv://mestirimouna2:4MOQJbguIcYHVjeznod@cluster0.xbpxrbq.mongodb.net/?retryWrites=true&w=majority"

async function connect() {
    try {
        await mongoose.connect(url);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
}


connect();
