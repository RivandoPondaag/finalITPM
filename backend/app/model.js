const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    nama: {
        type: String,
        required: [true, "Nama tidak boleh kosong."],
    },
    kolom: {
        type: Number,
        required: [true, "Kolom tidak boleh kosong."],
    },
    NIK: {
        type: Number,
        required: [true, "NIK tidak boleh kosong."],
    },
    jenisKelamin: {
        type: String,
        enum: ['Laki-laki', 'Perempuan'],
        required: [true, "Jenis Kelamin tidak boleh kosong."],
    },
    password: {
        type: String,
        required: [true, "Password tidak boleh kosong."],
    },
    photo: {
        type: String,
        default: null,
    }
});

module.exports = mongoose.model('users', userSchema);
