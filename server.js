require("dotenv").config();
const express = require("express");
const authroutes = require("./routes/authroutes");
const connectDB = require("./config/db");

connectDB();
const app = express();

app.use(express.json()); // Enable JSON parsing

app.use("/api/v1",authroutes)

app.listen(8000,()=>{
    console.log("server is running on port 8000")
});

module.exports = app; 