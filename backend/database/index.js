const mongoose = require('mongoose');
const { mongoUrl } = require('../config');

mongoose.connect(mongoUrl)
    .then(res => console.log(`Berhasil terhubung ke database.`))
    .catch(error => console.log(`Gagal terhubung ke database. ${error.message}`));
