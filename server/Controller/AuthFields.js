const { model } = require("mongoose");


const checkAllFields = (req, res, next) => {

    const { name, email, password } = req.body;

    if (name && email && password) {
        next()
    }
    else {
        res.status(406).json("fill all the fields")
    }
}

const checkLoginFields = (req, res, next) => {

    const { email, password } = req.body;

    if (email && password) {
        next()
    }
    else {
        res.status(406).json("fill all the fields")
    }
}

module.exports = { checkAllFields, checkLoginFields }