require('dotenv').config();
const app = require("./src/app");
const connectToDb = require("./src/config/database")

//db se connect 
connectToDb();


//server run 
app.listen(3000, () => {
    console.log('server is runing on port 3000')
});
