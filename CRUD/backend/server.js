require('dotenv').config();
const app = require('./src/app')
const ConnectToDb = require('./src/config/database')

// connect to db
ConnectToDb();

// server runing 
app.listen(3000, () => {
    console.log('server in runing on port 3000')
})