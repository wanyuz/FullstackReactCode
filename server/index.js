const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');

const app = express();
require('./services/passport')
require('./routes/authRoutes')(app);
require('./models/User');

mongoose.connect(keys.mongoURI);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
