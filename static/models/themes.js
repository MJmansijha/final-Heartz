const mongoose = require("mongoose");

const themeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    }
});

const ThemeInf = mongoose.model('ThemeInf', themeSchema);

module.exports = ThemeInf;



