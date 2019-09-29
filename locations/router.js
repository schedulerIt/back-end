const express = require('express');
const db = require('./locationdb.js');

const router = express.Router();

//GET ENDPOINT TO GET ALL LOCATIONS

router.get('/', async (req , res) => {
    try {
        const locationQuery = await db.find();
        res.status(200).json(locationQuery);
    }
    catch (err) {
        res.status(500).json({message: 'There was a problem retreiving Locations'})
    }
})


module.exports = router;

