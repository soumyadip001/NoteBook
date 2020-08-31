const mongoose = require('mongoose')

const noteSchema = new mongoose.Schema({
    question: {
        type: String,
        required: true,
        trim: true
    },
    answer: {
        type: String,
        required: true
    },
    tags: [{
        tag: {
            type: String,
            trim: true,
            required: false
        }
    }],
    status: {
        type: String,
        required: true,
        trim: true
    },
    level: {
        type: String,
        trim: true
    }
}, {
    timestamps: true
})

function dynamicSchema(schemaName) {
    return mongoose.model(schemaName, noteSchema)
}

module.exports = dynamicSchema