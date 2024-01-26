const mongoose = require('mongoose');

const baseOptions = {
    collection: "EmploiDeTempsEtudiant"
}

const EmploiEtudiantSchema = new mongoose.Schema({
    emploi: {
        type: String,
        required: true,
    },
}, baseOptions, {
    timestamps: true,
});

const EmploiEtudiant = mongoose.model('EmploiEtudiant', EmploiEtudiantSchema);
module.exports = EmploiEtudiant;
