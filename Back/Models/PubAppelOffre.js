const mongoose = require('mongoose');


const baseOptions = {
    collection: 'PubAppelOffre'
};

const PubAppelOffreSchema = new mongoose.Schema(
    {
        titre: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: false,
        },
        piece_jointe: {
            type: String,
            required: false,
        },
        date: {
            type: Date,
            default: Date.now,
        },
        
    },
    baseOptions,
    {
        timestamps: true,
    }
);

const PubAppelOffre = mongoose.model('PubAppelOffre', PubAppelOffreSchema);
module.exports = PubAppelOffre;
