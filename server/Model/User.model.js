const mongoose = require("mongoose");


const UserSchema = new mongoose.Schema({


    email: { type: String, require: true, max: 50 },
    password: { type: String, require: true, min: 6 },
    name: { type: String, require },
    profilePicture: { type: String, default: "" },
    userId: { type: String, default: "" },
    role: { type: String, default: "owner", enum: ["TeamMember", "admin", "owner"] }

},
    {
        timestamps: true
    })


module.exports = mongoose.model("users", UserSchema);