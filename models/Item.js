const mongoose = require('mongoose')

const itemSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    userId: {
        type: String,
        required: true
    }
})

const Item = new mongoose.model('Item', itemSchema)
module.exports = Item;