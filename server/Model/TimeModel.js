const mongoose = require("mongoose")

const timeSchema = new mongoose.Schema({
    description : String,
    project : String,
    tags : String,
    startTime: String,
    endTime: String,
    duration: String
})

const TimeModel = mongoose.model("time", timeSchema);

module.exports ={
    TimeModel
}