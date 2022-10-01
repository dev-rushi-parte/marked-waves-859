const mongoose = require("mongoose")

const clientSchema = new mongoose.Schema(
    {
       client:{type:String ,require:true},
       address:{type:String},
       amount:{type:Number},
       currency:String,
       project:{type:Array , default:[]}
    }
)

const clientModel = mongoose.model("client" , clientSchema)

module.exports =  clientModel
