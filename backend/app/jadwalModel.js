const mongoose = require('mongoose');

const jadwalSchema = new mongoose.Schema({
    kapasitas: {
        type: Number,
    },
    sesiPagi: {
        type: Number,
    },
    sesiSiang: {
        type: Number,
    },
    sesiMalam: {
        type: Number,
    },
    lakiLaki: {
        type: Number,
    },
    perempuan: {
        type: Number,
    }
});

module.exports = mongoose.model('jadwal', jadwalSchema);
