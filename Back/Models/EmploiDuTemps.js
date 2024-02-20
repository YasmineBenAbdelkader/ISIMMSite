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

const EmploiDuTemps = mongoose.model('EmploiDuTemps', EmploiDuTempsSchema);
module.exports = EmploiDuTemps;