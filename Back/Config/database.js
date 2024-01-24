const express = require("express");
const mongoose = require("mongoose");

const app = express();

const url = ""

async function connect() {
    try {
        await mongoose.connect(url);
        console.log("connect to mongoose");
    } catch (error){
        console.error(error);
    }
}

connect();
