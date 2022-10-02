const MemberRouter = require("express").Router();


const authorisation = require("../Controller/authrisation.middleware");
const MemberSchema = require("../Model/Members.model");
const UserModle = require("../Model/User.model");


// get all the users from user collection

MemberRouter.get("/user",authorisation(["owner", "admin"]), async (req, res) => {
    try {

        const user = await UserModle.find();
        res.status(201).send(user)

    }
    catch (err) {
        res.status(500).send(err)
    }
})


//  post the user in member collection and change the role in user collection as well as member collction

MemberRouter.post("/", authorisation(["owner", "admin"]), async (req, res) => {
    const { id, userId } = req.body;

    const check = await UserModle.findById(id).exec();
    const checkUserId = await MemberSchema.findOne({ userId: check.userId }).exec();
    console.log(!checkUserId);

    if (!checkUserId && id != userId) {
        try {




            const user = await UserModle.findById(id);
            // res.send(user)

            const { email, name, role, userId } = user;
            const payload = {
                email,
                name,
                userId,
                role: "TeamMember"
            }
            // res.send(payload)

            const update = await user.updateOne({ $set: payload })

            const newMember = new MemberSchema(payload);
            const member = await newMember.save();

            res.status(201).json({ "data": member });




        }
        catch (err) {
            res.status(500).send(err)
        }
    }
    else {
        res.status(406).send("User already Exist")
    }
})

// get alll memeber in member collection
MemberRouter.get("/", async (req, res) => {
    try {

        const user = await MemberSchema.find();
        res.status(201).send(user)

    }
    catch (err) {
        res.status(500).send(err)
    }

})


// edit or update the member role in member collection as well as user collection

MemberRouter.patch("/:id", authorisation(["owner", "admin"]), async (req, res) => {

    const { id } = req.params;

    const { role } = req.body;


    console.log(id, role)
    const member = await MemberSchema.findOneAndUpdate({ userId: id }, { $set: { role: role } }, { new: true })
    const user = await UserModle.findOneAndUpdate({ userId: id }, { $set: { role: role } }, { new: true })
    res.status(200).send("user Updates")

})


MemberRouter.delete("/:id",authorisation(["owner", "admin"]), async (req, res) => {

    const { id } = req.params;




    const member = await MemberSchema.findOneAndDelete({ userId: id })
    const user = await UserModle.findOneAndDelete({ userId: id })
    res.status(200).send("User Deleted")

})

// get the login in user
MemberRouter.get("/loginuser", async (req, res) => {

    const { userId } = req.body;

    const user = await await UserModle.findById(userId);
    res.send(user)
})
module.exports = MemberRouter;