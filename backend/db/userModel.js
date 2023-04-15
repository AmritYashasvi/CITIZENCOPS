const mongoose = require("mongoose");



const userSchema = new mongoose.Schema(
    {
        name: String,
        aadhar: Number,
        dob: Date,
        city: String,
        phoneno: Number,
        email: String,
        password: String
    }
);

const User = new mongoose.model("User", userSchema);


module.exports = User;
