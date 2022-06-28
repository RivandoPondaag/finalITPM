const mongoose = require('mongoose');

const operatorSchema = new mongoose.Schema({
    username: {
        type: String,
    },
    password: {
        type: String,
    }
});

module.exports = mongoose.model('operators', operatorSchema);
