const mongoose = require('mongoose');
const NAME = 'History';

const HistorySchema = new mongoose.Schema({
    Date: {
        type: Date,
        default: Date.now,
        required: true
    },
    winner: {
        type: String,
        required: true,
        default: "None"
    },
    loser: {
        type: String,
        default: "None"
    },
    winnerScore: {
        type: Number,
        required: true,
        default: 0
    },
    loserScore: {
        type: Number,
        require: true,
        default: 0
    }
});

export default [NAME,mongoose.model(NAME, HistorySchema)];