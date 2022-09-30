const MemberRouter = require("express").Router();


const MemberSchema = require("../Model/Members.model");
const UserModle = require("../Model/User.model");


// get all the users from user collection

MemberRouter.get("/user", async (req, res) => {
    try {

        const user = await UserModle.find();
        res.status(201).send(user)

    }
    catch (err) {
        res.status(500).send(err)
    }
})


//  post the user in member collection and change the role in user collection as well as member collction

MemberRouter.post("/:Id", async (req, res) => {
    try {

        const { Id } = req.params;

        const user = await UserModle.findById(Id);
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

MemberRouter.patch("/:id", async (req, res) => {

    const { id } = req.params;

    const { role } = req.body;
    const member = await MemberSchema.findOneAndUpdate({ userId: id }, { $set: { role: role } }, { new: true })
    const user = await UserModle.findOneAndUpdate({ userId: id }, { $set: { role: role } }, { new: true })
    console.log(role)
    res.status(200).send(member)

})
module.exports = MemberRouter;