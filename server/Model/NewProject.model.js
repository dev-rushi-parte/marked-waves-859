const mongoose = require("mongoose")

const ProjectSchema = new mongoose.Schema(
    {
       project:{type:String ,require:true},
       code:{type:String},
       amount:{type:Number},
       currency:{type:String},
       hourly:{type:String},
       freetype:{type:String},
       freeRecurr:{type:String},
       client:{type:Array , default:[]}
    }
)

const projectModel = mongoose.model("project" , ProjectSchema)

module.exports =  projectModel
