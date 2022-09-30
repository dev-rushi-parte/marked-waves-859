const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    taskName : { type : String },
        projectName : { type : String },
        assigneName : { type : String },
        dueDate:  { type : Number },
        taskDescription : { type : String },
        estimateTime : {type : Number},
        tag : { type : String }
})

const TaskModel = mongoose.model("task" , taskSchema);

module.exports = {
    TaskModel
}