const express = require('express');
const router = express.Router();
const {
    signIn,
    createAccount,
    guestSignIn,
} = require('./controller');

router.get('/signIn', signIn);
router.post('/createAccount', createAccount);
router.post('/guestSignIn', guestSignIn);

module.exports = router;
