const mongoose = require('mongoose');

const baseOptions = {
    collection: 'EmploiDuTemps'
};

const EmploiDuTempsSchema = new mongoose.Schema(
    {
        emploi: {
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

const EmploiDuTemps = mongoose.model('EmploiDuTemps', EmploiDuTempsSchema);
module.exports = EmploiDuTemps;