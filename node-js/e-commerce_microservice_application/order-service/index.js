const express = require("express");
///const express = require("dotenv").config;

const  app = express();
const PORT = process.env.PORT;
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const amqp = require("amqplib");
const Product = require("./Product")
const isAuthenticated = require("../isAuthenticated")
app.use(express.json());

mongoose.connect(
    "mongodb://localhost:27017/order-service",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,   
    },
    () => {
        console.log("order service db connected")
    }
);

async function connect (){
    const amqpServer = "amqp://localhost:5672"
    connection = await amqp.connect(amqpServer);
    channel = await connection.createChannel();
    await channel.assertQueue("ORDER")
}


connect().then(() => {
    channel.consume("ORDER", data => {
        const {products , userEmail} = JSON.parse(data.content);
        console.log("consuming order queue")
        console.log(products);;
    })
});

app.listen(5002, () => {
    console.log("order service is working at port 5002");
})