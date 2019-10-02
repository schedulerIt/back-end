const express = require('express');
const router = express.Router();
const db = require('../roles/rolesdb.js');

router.get('/' , async (req , res) => {
    try {
        const rolesResult = await db.find();
        res.status(200).json(rolesResult); 
    }
    catch (err) {
        res.status(500).json('There was an error with your request', err.message);
    }
})

module.exports = router;