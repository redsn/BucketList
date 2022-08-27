//===
// Dependencies
//===

const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

//===
// Routers
//===

const movieRouter = require('./Controllers/movies');


//===
// Middleware
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

// App 

const app = express();
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());




//===
// Routes 
//===

// TEST ROUTE //
app.get('/', (req,res) => {
    res.send('test');
});


// Controller Routes //

app.use('/api/query/movies', movieRouter);








//===
// Listener
//===

app.listen( PORT || 4000, () => {
    console.log(`Now listening on ${PORT}`)
});