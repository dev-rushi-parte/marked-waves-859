const jwt = require('jsonwebtoken');
require('dotenv').config()
const bcrypt = require("bcrypt");


const AuthRouter = require("express").Router();
const User = require("../Model/User.model")
const { checkAllFields, checkLoginFields } = require("../Controller/AuthFields")

// singup
AuthRouter.post("/singup", checkAllFields, async (req, res) => {

    const { name, email, password } = req.body
    // console.log(email)
    const checkUserEmail = await User.findOne({ email }).exec();
    const checkName = await User.findOne({ name }).exec();

    if (checkUserEmail) {

        res.status(403).send({ "message": "User already exists" })
    }
    else if (checkName) {

        res.status(403).send({ "message": "User already exists" })
    }


    else {
        try {
            await bcrypt.hash(password, 6, async (err, hash) => {
                if (err) {
                    res.status(503).send({ "message": "please try again" })
                }


                const newUser = new User({
                    name,
                    email,
                    password: hash
                });
                const user = await newUser.save();
                res.status(201).json(user)
            })
        }
        catch (err) {
            console.log(err);
            res.status(500).send(err, "catch err")
        }
    }

})


// Login

AuthRouter.post("/login", checkLoginFields, async (req, res) => {

    try {
        const { email, name, password } = req.body;

        const user = await User.findOne({ email });
        // console.log("user  " + user)
        const hash = user.password;
        const userId = user._id;
        console.log(userId)

        const payload = {
            email,
            name,
            userId: userId
        }
        // res.send(payload)

        const update = await user.updateOne({ $set: payload })



        // res.send(update)



        if (user == null) {
            return res.status(401).send({ "message": "Invalid user Credentials " })

        }


        bcrypt.compare(password, hash, (err, result) => {
            if (result) {
                var token = jwt.sign({ email, userId }, process.env.KEY);
                return res.status(201).send({ "message": "login successfull", "token": token, user })
            }
            else {
                return res.status(401).send({ "message": "Invalid user Credentials " })
            }
        })

    }
    catch (err) {
        res.status(500).send("Invalid credentials" + err)
    }
})




module.exports = AuthRouter