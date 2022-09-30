const {Router} = require('express');
const { TaskModel } = require('../Model/Task.model');
const taskController = Router();

taskController.post('/add' , async (req,res) => {
    const { taskName ,
        projectName ,
        assigneName ,
        dueDate ,
        taskDescription ,
        estimateTime ,
        tag} = req.body;
    const payload={
        taskName ,
        projectName ,
        assigneName ,
        dueDate ,
        taskDescription ,
        estimateTime ,
        tag
    }
    const new_user = new TaskModel(payload);
    await new_user.save();
    res.send("added successfully")
    console.log(payload)
})

module.exports = taskController
