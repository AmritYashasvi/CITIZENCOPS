const mongoose = require("mongoose");

async function dbConnect() {
    mongoose.connect('mongodb://127.0.0.1:27017/citizencopsDB', {useNewUrlParser: true})
    .then(() => {
        console.log("Sucessfully connected to database");
    })
    .catch((err) => {
        console.log(err);
        console.log("Failed to connect to database");
    });
}

module.exports = dbConnect;