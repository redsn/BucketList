//===
// Dependencies
//===

const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
require('dotenv').config();


//===
// App
//===

const app = express();


//===
// Middleware*
//===
const { PORT, MONGO_URL } = process.env;
const db = mongoose.connection;
mongoose.connect(MONGO_URL);

db.on('connected', ()=>{
    console.log('connected');
});
db.on('disconnected',  ()=>{
    console.log('disconnected');
});
db.on('error', ()=>{
    console.log('Something went wrong');
});















//===
// Listener
//===

app.listen( PORT || 4000, () => {
    console.log(`Now listening on ${PORT}`)
});