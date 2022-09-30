const ProjectRouter = require("express").Router()

const projectModel = require("../Model/NewProject.model")


ProjectRouter.get("/" ,async(req,res)=>{
    const notes = await projectModel.find()
    res.send(notes)
})



ProjectRouter.post("/new" ,async(req,res)=>{
    const payload=req.body
    const note = new projectModel(payload)
    try{
        await note.save()
        res.send({"msg":"CREATED"})
    }
    catch(err)
    {
        res.send({"msg":"Not CREATED"})
    }
})



module.exports={
    ProjectRouter
}