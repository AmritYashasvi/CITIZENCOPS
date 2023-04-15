const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dbConnect = require("./db/dbConnect");
const User = require("./db/userModel");
const Complain = require("./db/complainSchema");
const auth = require("./auth");

const saltRound = 10;

const app = express();

app.use(bodyParser.urlencoded({extended: true}));


dbConnect();

// Curb Cores Error by adding a header here
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PUT, DELETE, PATCH, OPTIONS"
    );
    next();
  });


//   name: String,
//   aadhar: Number,
//   dob: Date,
//   state: String,
//   city: String,
//   phoneno: Number,
//   email: String


app.post("/register", (req, res) => {

    const {name, aadhar, dob, city, phoneno, email, password} = req.body;

    bcrypt.hash(req.body.password, saltRound)
    .then((hashedPassword) => {
        const user = new User({
            name: req.body.name,
            aadhar: req.body.aadhar,
            dob: req.body.dob,
            state: req.body.state,
            city: req.body.city,
            phoneno: req.body.phoneno,
            email: req.body.email,
            password: hashedPassword
        });
        console.log(user);
        user.save()
        .then((result) => {
            res.status(201).send({
                message: "User Created Successfully",
                result,
            });
        })
        .catch((error) => {
            res.status(500).send({
                message: "Error creating user",
                error,
            });
        });
        console.log("User added");
    })
    .catch((err) => {
        res.status(500).send({
            message: "Password was not hashed successfully",
            err,
        });
        console.log("Unable to add the user");
    });
    
});

app.post("/login", (req, res) => {
    User.findOne({aadhar: req.body.aadhar}).then((user) => {
        bcrypt.compare(req.body.password, user.password).then((passwordCheck) => {
            if(!passwordCheck)
            {
                return res.status(400).send({
                        message: "Passwords does not match"
                    });
            }
            //creating token
            const token = jwt.sign(
                {
                  userId: user._id,
                  userUsername: user.aadhar,
                },
                process.env.TOKEN,
                { expiresIn: "24h" }
            );
            res.status(200).send({
                message: "Login Successful",
                username: user.username,
                token
            })
            }).catch((err) => {
                res.status(400).send({
                    message: "Passwords does not match",
                    err
                });
        });
    }).catch((e) => {
        res.status(404).send({
            message: "Username not found",
            e
        });
    })
});



app.post("/lodge-complain", auth, (req, res) => {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; 
    var yyyy = today.getFullYear();
    if(dd<10) 
    {
        dd='0'+dd;
    } 
    if(mm<10) 
    {
        mm='0'+mm;
    } 
    today = yyyy+'-'+mm+'-'+dd;

    const complain = new Complain({
        citizenid: req.user.userId,
        type: req.body.type,
        date: today,
        subject: req.body.subject,
        description: req.body.description,
        flag: false
    });
    complain.save()
        .then((result) => {
            res.status(201).send({
                message: "Complain Created Successfully",
                result,
            });
        })
        .catch((error) => {
            res.status(500).send({
                message: "Error creating complain",
                error,
            });
        });
        console.log("Complain added");

});








app.listen(3004, () => {
    console.log("Server running on port 3004");
});
