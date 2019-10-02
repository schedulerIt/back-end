const express = require('express');
const router = express.Router();

const db = require('../users/usersdb.js');

router.get('/', async (req,res) => {
    const allUsers = await db.find();
    try {
        res.status(200).json(allUsers);
    }
    catch (err) {
        res.status(500).json('There was a problem with your request', err.message);
    }
})

module.exports = router;