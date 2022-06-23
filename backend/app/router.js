const express = require('express');
const router = express.Router();
const {
    signIn,
    createAccount,
    guestSignIn,
    postPengumuman,
    getPengumuman,
} = require('./controller');

router.get('/signIn', signIn);
router.post('/createAccount', createAccount);
router.post('/guestSignIn', guestSignIn);
router.post('/postPengumuman', postPengumuman);
router.get('/getPengumuman', getPengumuman);

module.exports = router;
