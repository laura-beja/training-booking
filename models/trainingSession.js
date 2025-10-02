const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const trainingSessionSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    userId: {
        type: String,
        required: true,
        minlength: 10,
        maxlength: 10
    },
    date: {
        type: Date,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    cardDetails: {
        cardNumber: {
            type: String,
            required: true
        },
        expiryDate: {
            type: String,
            required: true
        },
        securityCode: {
            type: String,
            required: true
        }
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('TrainingSession', trainingSessionSchema);