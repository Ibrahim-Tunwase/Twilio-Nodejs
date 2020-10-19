//jshint esversion:6
require("dotenv").config();
const express = require("express");

const app = express();

const accountSid = process.env.ACCOUNT_SID;
const authToken = process.env.AUTH_TOKEN;

const client = require("twilio")(accountSid, authToken);
client.messages
    .create({
        body: 'Hey Ibrhaim, this is your first twilio api message',
        from: '+19282724796',
        to: '+2348163491394'
    })

    .then(message => console.log(message.sid));


app.listen("3000", function () {
    console.log("Server Started");
});

