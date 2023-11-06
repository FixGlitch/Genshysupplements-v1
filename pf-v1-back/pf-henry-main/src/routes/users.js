const express = require('express');
const router = express.Router();


router.get('/', (req,res) => {
    console.log('Get All Users')
    res.send(`Users route`)
});

module.exports = router;