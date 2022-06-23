const express = require('express');
const router = express.Router();
const {
    signIn,
    createAccount,
    guestSignIn,
    operatorInput,
} = require('./controller');

router.get('/signIn', signIn);
router.post('/createAccount', createAccount);
router.post('/guestSignIn', guestSignIn);
router.post('/operatorInput', operatorInput);

module.exports = router;
