const MemberRouter = require("express").Router();


const MemberSchema = require("../Model/Members.model");
const UserModle = require("../Model/User.model");



MemberRouter.post("/", async (req, res) => {
    try {
        const { userId } = req.body;

        const user = await UserModle.findById(userId);

        const { email, name, role } = user;
        const payload = {
            email,
            name,
            role: "TeamMember"
        }
        // res.send(payload)

        const newMember = new MemberSchema(payload);
        const member = await newMember.save();

        res.status(201).json({ "data": member });



    }
    catch (err) {
        res.status(500).send(err)
    }

})


module.exports = MemberRouter;