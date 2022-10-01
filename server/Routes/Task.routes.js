const {Router} = require('express');
const { TaskModel } = require('../Model/Task.model');
const taskController = Router();

taskController.post('/task' , async (req,res) => {
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
    console.log(payload)
    res.send({"msg": "added successfully"})
})

module.exports = taskController
