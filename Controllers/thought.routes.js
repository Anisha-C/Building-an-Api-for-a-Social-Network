const router = require("express").Router()
const { Thought, User } = require("../Models")

//To get a thought

router.get("/", async (req, res) => {
    try {
        const thoughts = await Thought.find()
        res.status(200).json(thoughts)
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
})

//To get a single thought

router.get("/:id", async (req, res) => {
    try {
        const thought = await Thought.findOne({ _id: req.params.id })
        res.status(200).json(thought)
        //Update the user
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
})

//To create a thought

router.post("/", async (req, res) => {
    try {
        const newthought = await Thought.create(req.body)
        //Update the user
      // const updatingUser = User.findOneAndUpdate({ _id: req.body.userId }, { $push: { thoughts: newthought._id } }, { new: true })
        res.status(200).json(updatingUser)
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
})

//Update a thought
router.put("/:id", async (req, res) => {
    try {
        const thought = await Thought.findOneAndUpdate({ _id: req.params.id }, { $set: req.body }, { runValidators: true, new: true })
        res.status(200).json(thought)
        //Update the user
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
})

//Delete a thought
router.delete("/:id", async (req, res) => {
    try {
        const thought = await Thought.findOneAndRemove({ _id: req.params.id })
        res.status(200).json(thought)
        //Update the user
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
})

//Add  a reaction
router.put("/reaction/:id", async (req, res) => {
    try {
        const reaction = await Thought.findOneAndUpdate({ _id: req.params.id }, { $addToSet: { reactions: req.body } }, { runValidators: true, new: true })
        res.status(200).json(reaction)
        //Update the user
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
})

//Remove a reaction
router.delete("/reaction/:id/:reactionId", async (req, res) => {
    try {
        const reaction = await Thought.findOneAndUpdate({ _id: req.params.id }, { $pull: { reactions: { reactionId: req.params.reactionId } } }, { runValidators: true, new: true })
        res.status(200).json(reaction)
        //Update the user
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
})
module.exports = router