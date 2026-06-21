const express = require('express');
const authRouter = require('./routes/auth.route');
const cookieparser = require('cookie-parser')

const app = express();
app.use(express.json());
app.use(cookieparser())


// authRouter 
app.use('/api/auth', authRouter)

module.exports = app
