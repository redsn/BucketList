const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const newUser = new Schema({
    // User Name: Displayed for public
    username: {type: String},
    // unique* to users
    email: {type: String},
    // UNIQUE ID is a PLACEHOLDER §§
    uniqueID: {type: String}
    // Favorites?


})