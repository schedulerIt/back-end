const express = require('express');

const db = require('./accountdb');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const accountData = await db.find();
        res.status(200).json(accountData); 
    }
    catch (err) {
        res.status(500).json('There was a problem with your request. Error', err.message);
    }
})

module.exports = router;