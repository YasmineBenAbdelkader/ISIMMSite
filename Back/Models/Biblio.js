const mongoose = require('mongoose');

const baseOptions = {
    collection: 'Bibliothèque'
};

const BiblioSchema = new mongoose.Schema(
    {
        titre: {
            type: String,
            required: true,
        },
        doc: {
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

const Biblio = mongoose.model('Biblio', BiblioSchema);
module.exports = Biblio;
