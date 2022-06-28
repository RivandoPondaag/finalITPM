const user = require('./userModel');
const guest = require('./guestModel');
const p = require('./pengumumanModel');
const j = require('./jadwalModel');

const signIn = async(req, res, next) => {
    const { NIK, password } = req.query;

    try {
        const result = await user.find({NIK: parseInt(NIK), password: password});

        if(result.length > 0) {
            res.send({
                status: 'success',
                messsage: 'Akun terdaftar',
                desc: result[0],
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
    const { kapasitas, presentase, judul, pengumuman } = req.query;
    
    try {
        const pGet = await p.find();
        console.log(pGet[pGet.length-1]);
        console.log(pGet[pGet.length-1].judul);
        console.log(pGet[pGet.length-1].pengumuman);

        const pResult = await p.create({
            judul: (judul === 'null') ? pGet[pGet.length-1].judul : judul,
            pengumuman: (pengumuman === 'null') ? pGet[pGet.length-1].pengumuman : pengumuman,
        });

        const jResult = await j.updateOne({
            kapasitas: kapasitas,
            presentase: presentase,
            sesiPagi: 0,
            sesiSiang: 0,
            sesiMalam: 0,
            lakiLaki: 0,
            perempuan: 0,
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

const changeJadwal = async(req, res, next) => {
    try {
        const result = await j.updateOne(req.body);

        res.send({
            status: 'success',
            message: `Jadwal berhasil diperbarui.`,
            desc: result,
        });
    }
    catch(e) {
        res.send({
            status: 'error',
            message: `Jadwal gagal diperbarui.`,
            desc: e.message,
        });
    }
}

const updateOperator = async(req, res, next) => {
    console.log(req.body);
    try {
        const result = await user.updateOne({
            type: 'Operator',
        },
        {
            NIK: parseInt(req.body.username),
            password: req.body.password,
        })

        res.send({
            status: 'success',
            message: `Akun operator berhasil diperbarui.`,
            desc: result,
        });
    }
    catch(e) {
        res.send({
            status: 'error',
            message: `Akun operator gagal diperbarui.`,
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
    changeJadwal,
    updateOperator,
};
