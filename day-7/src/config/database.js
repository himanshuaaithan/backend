const mongoose = require("mongoose");

const MONGO_URI = process.env.MONGO_URI

function connectToDb (){
    mongoose.connect(MONGO_URI)
    .then(()=>{
        console.log('connect to db')
    })
}

module.exports = connectToDb