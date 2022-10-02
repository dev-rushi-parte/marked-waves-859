const ProjectRouter = require("express").Router()

const projectModel = require("../Model/NewProject.model")
const clientModel = require("../Model/NewClient.model")


ProjectRouter.get("/" ,async(req,res)=>{
    const notes = await projectModel.find()
    res.send(notes)
})



ProjectRouter.post("/new" ,async(req,res)=>{
    const {project,code,amount,
        currency,
        hourly,
        freetype,
        freeRecurr,
        client}  =req.body
    const note = new projectModel({project,code,amount,
        currency,
        hourly,
        freetype,
        freeRecurr,
        client})
    try{
        await note.save()
        res.send({"msg":"CREATED"})
    }
    catch(err)
    {
        res.send({"msg":"Not CREATED"})
    }
})


ProjectRouter.delete("/:_id" ,async(req,res)=>{
    console.log(req.params)
    await projectModel.findOneAndDelete(req.params)
    res.status(200).json({"msg":"DELETE"})
})



module.exports={
    ProjectRouter
}