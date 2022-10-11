const express = require("express");
///const express = require("dotenv").config;
const  app = express();
const PORT = process.env.PORT || 5001;
const mongoose = require("mongoose");
//const jwt = require("jsonwebtoken");
const amqp = require("amqplib");
const Pensioner = require("./pensioner")
const isAuthenticated = require("../isAuthenticated")
app.use(express.json());
var channel, connection;

mongoose.connect("mongodb://localhost:27017/pensioner-service",{
        useNewUrlParser: true,
        useUnifiedTopology: true,   
    },
    () => {
        console.log("pensioner service db connected")
    }
);

async function connect (){
    const amqpServer = "amqp://localhost:5672"
    connection = await amqp.connect(amqpServer);
    channel = await connection.createChannel();
    await channel.assertQueue("PENSIONER")
}


connect();

app.post("/pensioner/create", isAuthenticated, async (req,res) => {
    const{name, date_of_birth, pan, salary_earned, allowences, self_family_pension, bank_detail} = req.body;
    const newPensioner = new Pensioner({
        name,
        date_of_birth, 
        pan, 
        salary_earned, 
        allowences, 
        self_family_pension, 
        bank_detail
    });
    newPensioner.save();
    return res.json(newPensioner);
})

app.listen(PORT, () => {
    console.log("product service is working at port 5001");
})