const mongoose = require("mongoose");



const policeSchema = new mongoose.Schema(
    {
        username: String,
        city: String,
        password: String
    }
);

const Police = new mongoose.model("Police", policeSchema);


module.exports = Police;
