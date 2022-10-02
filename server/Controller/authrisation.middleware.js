


const AuthenticationModel = require("../Model/User.model");
const authorisation = (permittedRoles) => {

    return async (req, res, next) => {
        let { email } = req.body
        console.log(email)
        const user = await AuthenticationModel.findOne({ email })
        //permittedRoles - array of string/strings
        console.log(user)
        if (!user) {
            return res.send("User not Found")

        }
        //.includes
        let auth = false;
        console.log(user.role)
        if (permittedRoles.includes(user.role)) {
            auth = true;
        }
        if (!auth) {
            return res.send("not authorised")
        }
        next()
    }
}



module.exports = authorisation
