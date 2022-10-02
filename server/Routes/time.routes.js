const { Router } = require("express")
const { TimeModel } = require("../Model/TimeModel")

const timeController = Router();

timeController.get("/", async (req, res) => {

    const result = await TimeModel.find()
    res.send(result)

})

timeController.post("/addTime", async (req, res) => {
    const { description, project,
        tags,
        startTime,
        endTime,
        duration } = req.body;

    const payload = {
        description,
        project,
        tags,
        startTime,
        endTime,
        duration
    }
    const new_ia = new TimeModel(payload)
    await new_ia.save()
    res.send("success time added")
})

module.exports = {
    timeController
}