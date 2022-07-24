const { Schema, Types } = require("mongoose")
const reactionSchema = require("./Reaction")

const thoughtSchema = new Schema({
    thoughtText: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 500,
    },

    createdAt: {
        type: Date,
        default: () => Date.now(),
        get: timestamp => new Date(timestamp).toLocaleString(),
    },

    username: {
        type: String,
        required: true,
    },

    reactions: [reactionSchema]
},

    {
        toJSON: {
            getters: true,
        },

        id: false,
    },
)

thoughtSchema.virtual("reaction-count").get(function () {
    return this.reactions.length()
})

const Thought = model("Thought", thoughtSchema)

module.exports = Thought
