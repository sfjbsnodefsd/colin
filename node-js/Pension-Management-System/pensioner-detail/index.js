const express = require("express");
///const express = require("dotenv").config;

const  app = express();
const PORT = process.env.PORT || 5001;
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
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
    await channel.assertQueue("PRODUCT")
}


connect();

app.post("/pensioner/create", isAuthenticated, async (req,res) => {
    const{name, description, price} = req.body;
    const newPensioner = new Pensioner({
        name,
        description,
        price
    });
    newPensioner.save();
    return res.json(newPensioner);
})

app.post("/pensioner/buy", isAuthenticated, async (req, res) => {
    const  {ids} = req.body;
    const pensioners = await Pensioner.find({_id:{ $in: ids}});

    channel.sendToQueue(
        "ORDER",
        Buffer.from(
            JSON.stringify({
                products,
                userEmail: req.user.email,
            })
        )
    );
    channel.consume("PRODUCT", data => {
        console.log("consuming product queue");
            order = JSON.parse(data.content);
            channel.ack(data);
    })
    return res.json(order);
});


app.listen(PORT, () => {
    console.log("product service is working at port 5001");
})