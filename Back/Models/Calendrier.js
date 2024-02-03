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
        Cycle_etude: {
            type: String,
            required: false,
        },
        specialite: {
            type: String,
            required: false,
    
        },
        niveau_etude: {
            type: Number,
            required: false,

        }, 
        Td: {
            type: Number,
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