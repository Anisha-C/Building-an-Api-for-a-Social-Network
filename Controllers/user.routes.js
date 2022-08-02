const router = require("express").Router()
const { Thought, User } = require("../Models")

router.get("/", async (req, res) => {
    try {
        const users = await User.find()
        res.status(200).json(users)
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
})

//To get a single user

router.get("/:id", async (req, res) => {
    try {
        const users = await User.findOne({ _id: req.params.id })
        res.status(200).json(users)
        //Update the user
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
})

//To create a user

router.post("/", async (req, res) => {
    try {
        const users = await User.create(req.body)
        res.status(200).json(users)
        //Update the user
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
})

//Update a user
router.put("/:id", async (req, res) => {
    try {
        const users = await User.findOneAndUpdate({ _id: req.params.id }, { $set: req.body }, { runValidators: true, new: true })
        res.status(200).json(users)
        //Update the user
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
})

//Delete a user
router.delete("/:id", async (req, res) => {
    try {
        const users = await User.findOneAndRemove({ _id: req.params.id })
        res.status(200).json(users)
        //Update the user
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
})

//Add  a friend
router.put("/friend/:id/:friendId", async (req, res) => {
    try {
        const friend = await User.findOneAndUpdate({ _id: req.params.id }, { $addToSet: { friends: req.params.friendId} }, { new: true })
        res.status(200).json(friend)
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
})

//Remove a friend
router.delete("/friend/:id/:friendId", async (req, res) => {
    try {
        const friend = await User.findOneAndUpdate({ _id: req.params.id }, { $pull: { friends: req.params.friendId } }, { new: true })
        res.status(200).json(friend)
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
})

module.exports = router