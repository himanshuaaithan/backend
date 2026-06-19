const mongoose = require('mongoose');

function ConnectToDb() {
    mongoose.connect(process.env.MONGO_URI)
        .then(() => {
            console.log('connect to db')
        })
}

module.exports = ConnectToDb