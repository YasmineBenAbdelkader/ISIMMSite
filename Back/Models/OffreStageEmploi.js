const mongoose = require('mongoose');

const baseOptions = {
    collection: 'OffreStageEmploi'
};

const OffreStageEmploiSchema = new mongoose.Schema(
    {

        ID:{
            type: String,
            required: true,
            unique: true 
        },
        titre: {
            type: String,
            required: true,
        },
        entreprise: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: false,
        },
        photo: {
            type: String,
            required: false,
        },
        files: [{
            type: String,
            required: false,
        }],
        formulaire: {
            type: String,
            required: false,
        },
        date: {
            type: Date,
            default: Date.now,
        },
         stage: {
            type: Boolean,
            default: false,
        },
        emploi: {
            type: Boolean,
            default: false,
        },

        nature : {
            type: String,
            required: false,
        }
    },
    baseOptions,
    {
        timestamps: true,
    }
);

const OffreStageEmploi = mongoose.model('OffreStageEmploi', OffreStageEmploiSchema);
module.exports = OffreStageEmploi;
