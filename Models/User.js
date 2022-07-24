const { Schema, Types } = require("mongoose")
const reactionSchema = require("./Reaction")

const userSchema = ({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },

    email: {
        type: String,
        required: true,
        unique: true,
        match: [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/, "Must match an email address!"]
    },
    thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: "Thought",
        }
    ],
    friends:
        [{
            type: Schema.Types.ObjectId,
            ref: "User",
        }
        ],


})

userSchema.virtual("friend-count").get(function () {
    return this.friends.length()
})

const User = model("User", userSchema)

module.exports = User