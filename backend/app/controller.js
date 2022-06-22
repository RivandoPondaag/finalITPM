const db = require('./model');
const { ObjectID } = require('mongodb');

const signIn = async(req, res, next) => {
    const { NIK, password } = req.query;

    try {
        const result = await db.find({NIK: parseInt(NIK), password: password});
        
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
        const result = await db.create({
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

module.exports = {
    signIn,
    createAccount,
};
