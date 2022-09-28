// const UserRouter = require("express").Router();
// const User = require("../Model/User.model")
// const bcrypt = require("bcrypt");


// // get the user own account
// UserRouter.get("/", async (req, res) => {

//     const { email, userId } = req.body
//     console.log(userId + " " + "User id")
//     try {
//         const user = await User.find({ email })
//         res.status(200).send(user)
//     }
//     catch (err) {
//         res.status(500).send(err)
//     }
// })

// // update the user own account
// UserRouter.put("/:id", async (req, res) => {

//     const { userId, email, password } = req.body;
//     const { id } = req.params

//     if (userId === id || req.body.isAdmin) {

//         if (password) {
//             try {
//                 const salt = await bcrypt.genSalt(10);
//                 req.body.password = await bcrypt.hash(password, salt);

//             }
//             catch (err) {
//                 console.log(err)
//                 res.status(500).send(err)
//             }
//         }

//         try {
//             const user = await User.findByIdAndUpdate(id, { $set: req.body });
//             res.status(200).send("Account has been updated");
//         }
//         catch (err) {
//             return res.status(500).send(err);
//         }
//     }
//     else {
//         return res.status(401).send("You can update only ur Account!")
//     }
// })

// // delete the  user account
// UserRouter.delete("/:id", async (req, res) => {

//     const { userId, email, password } = req.body;
//     const { id } = req.params

//     if (userId === id || req.body.isAdmin) {

//         try {
//             const user = await User.findByIdAndDelete(userId);
//             res.status(200).send("Account has been Deleted");
//         }
//         catch (err) {
//             return res.status(500).send(err);
//         }
//     }
//     else {
//         return res.status(401).send("You can delete only your Account!")
//     }
// })


// // get the other user account

// UserRouter.get("/:id", async (req, res) => {

//     try {
//         const user = await User.findById(req.params.id);

//         const { password, updatedAt, createdAt, ...other } = user._doc;
//         res.status(200).send(other);

//     }
//     catch (err) {
//         res.status(500).send(err)
//     }

// })

// //  to follow the users

// UserRouter.put("/:id/follow", async (req, res) => {
//     const { userId } = req.body;
//     const { id } = req.params;

//     if (userId !== id) {

//         try {
//             const user = await User.findById(id);
//             const currentUser = await User.findById(userId);

//             if (!user.followers.includes(userId)) {
//                 await user.updateOne({ $push: { followers: userId } });
//                 await currentUser.updateOne({ $push: { followings: id } });
//                 res.status(200).json("user has been followed")
//             }
//             else {
//                 res.status(403).json("you already follow these user");
//             }
//         }
//         catch (err) {
//             res.status(500).json(err)
//         }

//     }
//     else {
//         res.status(403).send("You can't follow yourself")
//     }
// })


// // to unfollow the user

// UserRouter.put("/:id/unfollow", async (req, res) => {
//     const { userId } = req.body;
//     const { id } = req.params;

//     if (userId !== id) {

//         try {
//             const user = await User.findById(id);
//             const currentUser = await User.findById(userId);

//             if (user.followers.includes(userId)) {
//                 await user.updateOne({ $pull: { followers: userId } });
//                 await currentUser.updateOne({ $pull: { followings: id } });
//                 res.status(200).json("user has been unfollowed")
//             }
//             else {
//                 res.status(403).json("you are not followed this user");
//             }
//         }
//         catch (err) {
//             res.status(500).json(err)
//         }

//     }
//     else {
//         res.status(403).send("You can't unfollow yourself")
//     }
// })



// module.exports = UserRouter