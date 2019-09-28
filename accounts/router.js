const express = require('express');

const db = require('./accountdb');

const router = express.Router();

//GET TO PETCH ALL ACCOUNT RECORDS
router.get('/', async (req, res) => {
    try {
        const accountData = await db.find();
        res.status(200).json(accountData); 
    }
    catch (err) {
        res.status(500).json('There was a problem with your request. Error', err.message);
    }
})


//POST TO ADD A NEW ACCOUNT. 
//THIS ENDPOINT IS A BIT DIFFICULT BECAUSE IT WILL TRIGGER AFTER REGISTRATION
router.post('/', newAccount, async (req , res)=> {
    
})

module.exports = router;

//MIDDLEWARE TO CREATE A NEW ACCOUNT
async function newAccount() {

}