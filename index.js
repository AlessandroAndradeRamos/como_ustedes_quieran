const express = require('express');
const app = express();
require('./routes/authRoutes') (app);
const passportConfig = require('./services/passport');

// app.get('/', function (req, res) {
//     res.send('<html><head></head><body><h1>ALGO NOMAS</h1></body></html>')
// });
const PORT = process.env.PORT || 5000;

app.listen(PORT);