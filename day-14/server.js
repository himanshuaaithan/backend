require('dotenv').config();
const app = require('./src/app');
const connectToDb = require('./src/config/database');

// connect to database
connectToDb()


// server runing
app.listen(3000, () => {
    console.log('server is runing on port 3000');
});