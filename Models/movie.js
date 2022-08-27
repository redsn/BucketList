const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const newListitem = new Schema({
    name: {type: String}
}, {timestamps: true});

module.exports = mongoose.model('listitem', newListitem);