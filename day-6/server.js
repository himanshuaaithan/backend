require('dotenv').config();

const app = require("./src/app");
const mongoose = require("mongoose");

const port = process.env.PORT
const mongoose_uri = process.env.MONGO_URI;


function connectTodb (){
    mongoose.connect(mongoose_uri)
    .then(()=>{
        console.log("connect to db")
    })
}
connectTodb()


app.listen(port, () => {
    console.log("server is runing on port 3000");
});