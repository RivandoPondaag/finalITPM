const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    nama: {
        type: String,
    },
    kolom: {
        type: Number,
    },
    NIK: {
        type: Number,
    },
    jenisKelamin: {
        type: String,
        enum: ['Laki-laki', 'Perempuan'],
    },
    password: {
        type: String,
    },
    photo: {
        type: String,
        default: null,
    },
    type: {
        type: String,
        default: 'User',
    }
});

module.exports = mongoose.model('users', userSchema);
