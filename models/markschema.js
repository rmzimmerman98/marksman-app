const mongoose = require('mongoose');

const marksmenSchema = new mongoose.Schema({
    name: {type: String},
    title: {type: String},
    picture: {type: String},
    passive: {
        name: {type: String},
        description: {type: String}
    },
    abilityQ: {
        name: {type: String},
        description: {type: String}
    },
    abilityW: {
        name: {type: String},
        description: {type: String}
    },
    abilityE: {
        name: {type: String},
        description: {type: String}
    },
    ultimate: {
        name: {type: String},
        description: {type: String}
    },
    stats: {
        health1: {type: Number},
        healthGrowth: {type: Number},
        health18: {type: Number},
        attack1: {type: Number},
        attackGrowth: {type: Number},
        attack18: {type: Number},
        range: {type: Number},
        speed: {type: Number}
    }
})

const marksmanCollection = mongoose.model('Marksman', marksmenSchema)

module.exports = marksmanCollection