const mongoose = require("mongoose")

const ProjectSchema = new mongoose.Schema(
    {
       project:{type:String ,require:true},
       code:{type:String},
       timeamount:{type:Number},
       timecurrency:{type:String},
       hourly:{type:String},
       freecurrency:{type:String},
       freetype:{type:String},
       freeRecurr:{type:String},
       freeamount:{type:Number}
    }
)

const projectModel = mongoose.model("project" , ProjectSchema)

module.exports =  projectModel
