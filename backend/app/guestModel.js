const mongoose = require('mongoose');

const guestSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name tidak boleh kosong."],
    },
    address: {
        type: String,
        required: [true, "Address tidak boleh kosong"],
    }
});

module.exports = mongoose.model('guest', guestSchema);
