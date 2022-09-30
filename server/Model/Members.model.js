const mongoose = require("mongoose");


const MemberSchema = new mongoose.Schema({


    email: { type: String, require: true, max: 50 },
    name: { type: String, require },
    profilePicture: { type: String, default: "" },
    role: { type: String },
    userId: { type: String }

},
    {
        timestamps: true
    })


module.exports = mongoose.model("members", MemberSchema);