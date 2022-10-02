const ProjectRouter = require("express").Router()

const projectModel = require("../Model/NewProject.model")
const clientModel = require("../Model/NewClient.model")
const authorisation = require("../Controller/authrisation.middleware")


ProjectRouter.get("/", async (req, res) => {
    const notes = await projectModel.find()
    res.send(notes)
})



ProjectRouter.post("/new", authorisation(["owner", "admin"]), async (req, res) => {
    const { project, code, amount,
        currency,
        hourly,
        freetype,
        freeRecurr,
        client } = req.body
    const note = new projectModel({
        project, code, amount,
        currency,
        hourly,
        freetype,
        freeRecurr,
        client
    })
    try {
        await note.save()
        res.send({ "msg": "CREATED" })
    }
    catch (err) {
        res.send({ "msg": "Not CREATED" })
    }
})


ProjectRouter.get("/sortproasc", async (req, res) => {
    const notes = await projectModel.find().sort({ project: 1 })
    res.send(notes)
})


ProjectRouter.get("/sortprodec", async (req, res) => {
    const notes = await projectModel.find().sort({ project: -1 })
    res.send(notes)
})

ProjectRouter.get("/sortcodeasc", async (req, res) => {
    const notes = await projectModel.find().sort({ code: 1 })
    res.send(notes)
})


ProjectRouter.get("/sortcodedec", async (req, res) => {
    const notes = await projectModel.find().sort({ code: -1 })
    res.send(notes)
})

ProjectRouter.get("/sortcliasc", async (req, res) => {
    const notes = await projectModel.find().sort({ client: 1 })
    res.send(notes)
})


ProjectRouter.get("/sortclidec", async (req, res) => {
    const notes = await projectModel.find().sort({ client: -1 })
    res.send(notes)
})

ProjectRouter.get("/sortamoasc", async (req, res) => {
    const notes = await projectModel.find().sort({ amount: 1 })
    res.send(notes)
})


ProjectRouter.get("/sortamodec", async (req, res) => {
    const notes = await projectModel.find().sort({ amount: -1 })
    res.send(notes)
})





ProjectRouter.delete("/:_id", async (req, res) => {
    console.log(req.params)
    await projectModel.findOneAndDelete(req.params)
    res.status(200).json({ "msg": "DELETE" })
})



module.exports = {
    ProjectRouter
}