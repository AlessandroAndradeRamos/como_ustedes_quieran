const express = require('express');
const app = express();

app.get('/', function (req, res) {
    res.send('<html><head></head><body><h1>ALGO NOMAS</h1></body></html>')
});

const PORT = process.env.PORT || 3000;

app.listen(PORT);