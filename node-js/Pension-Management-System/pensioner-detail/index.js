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
<<<<<<< HEAD
    const{name, date_of_birth, pan, aadhaar, salary_earned, allowences, self_family_pension, bank_detail} = req.body;
    const newPensioner = new Pensioner({
        name,
        date_of_birth, 
        pan,
        aadhaar, 
=======
    const{name, date_of_birth, pan, salary_earned, allowences, self_family_pension, bank_detail} = req.body;
    const newPensioner = new Pensioner({
        name,
        date_of_birth, 
        pan, 
>>>>>>> 27a6bc9d1aa806f3794348842dd63081f9b9cb6f
        salary_earned, 
        allowences, 
        self_family_pension, 
        bank_detail
    });
    newPensioner.save();
    return res.json(newPensioner);
})

<<<<<<< HEAD
app.get("/pensioner/getall", isAuthenticated, async (req,res) => {
    try {
        const pensioners = await Pensioner.find();
        res.json(pensioners);
    } catch (err) {
        res.json(err);
    }
});

app.get("/pensioner/getby/:aadhaar",isAuthenticated, async (req,res) => 
{
    try {
        const pensioners = await Pensioner.find({aadhaar: req.params.aadhaar},req.body);
        res.json(pensioners);

    }catch (error) {
        res.send(error);
    }
});

=======
>>>>>>> 27a6bc9d1aa806f3794348842dd63081f9b9cb6f
app.listen(PORT, () => {
    console.log("product service is working at port 5001");
})