const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    taskName : { type : String },
        projectName : { type : String },
        assigneName : { type : String },
        dueDate:  { type : String },
        taskDescription : { type : String },
        estimateTime : {type : String},
        tag : { type : String }
})

const TaskModel = mongoose.model("task" , taskSchema);

module.exports = {
    TaskModel
}