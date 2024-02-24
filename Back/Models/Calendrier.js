const mongoose = require('mongoose');

const baseOptions = {
    collection: 'CalendrierExamens'
};

const CalendrierExamensSchema = new mongoose.Schema(
    {
        Calendrier: {
            type: String,
            required: true,
        },
        level :{
            type: String,
            required: false,
        }, 
        enseignant :{
            type: String,
            required: false,
        }
    },
    baseOptions,
    {
        timestamps: true,
    }
);

const CalendrierExamens = mongoose.model('CalendrierExamens', CalendrierExamensSchema);
module.exports = CalendrierExamens;