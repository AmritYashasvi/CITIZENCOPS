require("dotenv").config();
const mongoose = require("mongoose");

async function dbConnect() {
    mongoose.connect(process.env.DATABASE, {useNewUrlParser: true})
    .then(() => {
        console.log("Sucessfully connected to database");
    })
    .catch((err) => {
        console.log(err);
        console.log("Failed to connect to database");
    });
}

module.exports = dbConnect;