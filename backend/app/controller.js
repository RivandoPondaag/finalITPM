const user = require('./userModel');
const guest = require('./guestModel');
const p = require('./pengumumanModel');
const j = require('./jadwalModel');
const { ObjectID } = require('mongodb');

const signIn = async(req, res, next) => {
    const { NIK, password } = req.query;

    try {
        const result = await user.find({NIK: parseInt(NIK), password: password});
        
        if(result.length > 0) {
            res.send({
                status: 'success',
                message: `Akun terdaftar.`,
                desc: result,
            });
        }
        else {
            res.send({
                status: 'error',
                message: `Akun tidak terdaftar.`,
                desc: result,
            });
        }
    }
    catch(e) {
        res.send({
            status: 'error',
            message: `Terjadi kesalahan.`,
            desc: e.message,
        });
    }
};

const createAccount = async(req, res, next) => {
    const { nama, kolom, NIK, jenisKelamin, password, photo } = req.body;

    try {
        const result = await user.create({
            nama: nama,
            kolom: kolom,
            NIK: NIK,
            jenisKelamin: jenisKelamin,
            password: password,
            photo: photo,
        });

        res.send({
            status: 'success',
            message: `Akun baru berhasil dibuat.`,
            desc: result,
        });
    }
    catch(e) {
        res.send({
            status: 'error',
            message: `Akun baru gagal dibuat.`,
            desc: e.message,
        });
    }
};

const guestSignIn = async(req, res, next) => {
    const { name, address } = req.body;
    
    try {
        const result = await guest.create({
            name: name,
            address: address,
        });

        res.send({
            status: 'success',
            message: `Guest berhasil masuk.`,
            desc: result,
        });
    }
    catch(e) {
        res.send({
            status: 'error',
            message: `Guest gagal masuk.`,
            desc: e.message,
        });
    }
};

const postPengumuman = async(req, res, next) => {
    const { kapasitas, judul, pengumuman } = req.query;
    
    try {
        const pResult = await p.create({
            judul: judul,
            pengumuman: pengumuman,
        });

        const jResult = await j.updateOne({
            kapasitas: kapasitas,
        });

        res.send({
            status: 'success',
            message: `Permintaan berhasil diproses.`,
            desc: {
                pengumuman: pResult,
                kapasitas: jResult,
            },
        });
    }
    catch(e) {
        res.send({
            status: 'error',
            message: `Permintan gagal diproses.`,
            desc: e.message,
        });
    }
};

const getPengumuman = async(req, res, next) => {
    try {
        const result = await p.find();

        res.send({
            status: 'success',
            message: `Pengumuman berhasil dikirim.`,
            desc: result[result.length-1],
        });
    }
    catch(e) {
        res.send({
            status: 'error',
            message: `Pengumuman gagal dikirim.`,
            desc: e.message,
        });
    }
};

const getJadwal = async(req, res, next) => {
    try {
        const result = await j.findOne();

        res.send({
            status: 'success',
            message: `Jadwal berhasil dikirim.`,
            desc: result,
        });
    }
    catch(e) {
        res.send({
            status: 'error',
            message: `Jadwal gagal dikirim.`,
            desc: e.message,
        });
    }
};

module.exports = {
    signIn,
    createAccount,
    guestSignIn,
    postPengumuman,
    getPengumuman,
    getJadwal,
};
