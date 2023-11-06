const express = require('express');
const router = express.Router();
const {addProductHandler} = require('../handlers/productsHandlers');

router.post('/add', addProductHandler );

module.exports = router;