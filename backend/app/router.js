const express = require('express');
const router = express.Router();
const {
    signIn,
    createAccount,
    guestSignIn,
    postPengumuman,
    getPengumuman,
    getJadwal,
    changeJadwal,
    updateOperator,
} = require('./controller');

router.get('/signIn', signIn);
router.post('/createAccount', createAccount);
router.post('/guestSignIn', guestSignIn);
router.post('/postPengumuman', postPengumuman);
router.get('/getPengumuman', getPengumuman);
router.get('/getJadwal', getJadwal);
router.put('/changeJadwal', changeJadwal);
router.put('/updateOperator', updateOperator);

module.exports = router;
