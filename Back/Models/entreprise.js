const mongoose = require('mongoose');

const baseOptions = {
    collection: 'Entreprise'
};

const EntrepriseSchema = new mongoose.Schema(
    {
        titre: {
            type: String,
            required: true,
        },
        lien: {
            type: String,
            required: false,
        },
        photo: {
            type: String,
            required: false,
        },
        
    },
    baseOptions,
    {
        timestamps: true,
    }
);

const Entreprise = mongoose.model('Entreprise', EntrepriseSchema);
module.exports = Entreprise;
