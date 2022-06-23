const mongoose = require('mongoose');

const pengumumanSchema = new mongoose.Schema({
    kapasitas: {
        type: Number,
        require: [true, "Kapasitas tidak boleh kosong."],
    },
    judul: {
        type: String,
        required: [true, "Judul tidak boleh kosong."],
    },
    pengumuman: {
        type: String,
        required: [true, "Pengumuman tidak boleh kosong."],
    },
    dibuat: {
        type: Date,
        default: Date.now,
    }
});

module.exports = mongoose.model('pengumuman', pengumumanSchema);
