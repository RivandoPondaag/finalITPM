const express = require('express');
const router = express.Router();
const {
    signIn,
    createAccount,
} = require('./controller');

router.get('/signIn', signIn);
router.post('/createAccount', createAccount);

module.exports = router;
