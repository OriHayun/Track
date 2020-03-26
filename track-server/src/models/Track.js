const mongoose = require('mongoose');

const pointsSchema = mongoose.Schema({
    timestamp: Number,
    coords: {
        latitude: Number,
        longitude: Number,
        altitude: Number,
        accuracy: Number,
        heading: Number,
        speed: Number
    }
})


const trrackSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',

    },
    name: {
        type: String,
        default: '',
    },
    locations: [pointsSchema]
});

mongoose.model('Track', trrackSchema)