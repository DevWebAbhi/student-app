const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const studentRouter = require("./routes/studentRoute");

dotenv.config();
const cors = require("cors");

app.use(cors());
app.use(express.json())
app.get("/",(req,res)=>{
    res.send("!pong");
})

app.use("/student",studentRouter);

const MONGO_URL = process.env.MONGO_URL;

mongoose.connect(MONGO_URL)
.then(()=>{
    app.listen(3030,()=>{
        console.log("server connected sucessfully");
    })
}).catch((err)=>{
    console.log(err);
})

