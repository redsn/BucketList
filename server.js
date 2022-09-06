//===
// Dependencies
//===

const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const admin  = require('firebase-admin');

//===
// Routers
//===

const movieRouter = require('./Controllers/movies');


//===
// Middleware
//===

const { PORT, MONGO_URL, PRIVATE_KEY_ID, PRIVATE_KEY } = process.env;
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

admin.initializeApp({
    credential: admin.credential.cert(
        {
            "type": "service_account",
            "project_id": "bucklist-app",
            "private_key_id": PRIVATE_KEY_ID,
            "private_key": PRIVATE_KEY.replace(/\\n/g, '\n') ,
            "client_email": "firebase-adminsdk-3w9u8@bucklist-app.iam.gserviceaccount.com",
            "client_id": "104022318570745435276",
            "auth_uri": "https://accounts.google.com/o/oauth2/auth",
            "token_uri": "https://oauth2.googleapis.com/token",
            "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
            "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-3w9u8%40bucklist-app.iam.gserviceaccount.com"
          }
          
    )
})
//===
// AUTH MIDDLEWARE
//===
app.use(async function(req,res,next) {
    try {
        const end_user = req.get('end_user');
        if(end_user){
            req.user = end_user;
        } else {
            req.user = null;
        }
    } catch (error) {
        req.user = null;
    }
    next();
})


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