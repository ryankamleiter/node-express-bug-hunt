const express = require('express');
const router = express.Router();

// x ??? x List of quotes
let quoteList = [];

// x ??? x GET request returns information
router.get('/', (req, res) => {
    console.log('GET Request made for /quotes');
    // Send back the list of quotes!
    res.send(quoteList);
});

// x ??? x POST request save user input
router.post('/', (req, res) => {
    console.log('POST Request made for /quotes');
    // Any data we send from the client is available
    // as a property of req.body.
    console.log(req.body);
    let quoteToAdd = req.body;
    quoteList.push(quoteToAdd);
    res.sendStatus(201);
});

// PUT request update information

// x ??? x

module.exports = router;