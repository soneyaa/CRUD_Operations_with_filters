const mongoose = require('mongoose');

const NoteSchema = mongoose.Schema({
    title: String,
    content: String,
    tag:String,
    country:String,
    salary:String
},
{
    timestamps: true
});

module.exports = mongoose.model('Note', NoteSchema);  