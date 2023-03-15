const mongoose = require('mongoose');

const marksmenSchema = new mongoose.Schema({
    name: {type: String, required: true},
    title: {type: String, required: true},
    picture: {type: String, required: true},
    passive: {
        name: {type: String, required: true},
        description: {type: String, required: true}
    },
    abilityQ: {
        name: {type: String, required: true},
        description: {type: String, required: true}
    },
    abilityW: {
        name: {type: String, required: true},
        description: {type: String, required: true}
    },
    abilityE: {
        name: {type: String, required: true},
        description: {type: String, required: true}
    },
    ultimate: {
        name: {type: String, required: true},
        description: {type: String, required: true}
    },
    stats: {
        health1: {type: Number, required: true},
        healthGrowth: {type: Number, required: true},
        health18: {type: Number, required: true},
        attack1: {type: Number, required: true},
        attackGrowth: {type: Number, required: true},
        attack18: {type: Number, required: true},
        range: {type: Number, required: true},
        speed: {type: Number, required: true}
    }
})