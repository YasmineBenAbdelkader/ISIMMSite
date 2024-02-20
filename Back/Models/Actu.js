const mongoose = require('mongoose');

const baseOptions = {
    collection: 'actualité'
};

const actualiteSchema = new mongoose.Schema(
    {
        titre: {
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
            type: String,
        }
    },
    baseOptions,
    {
        timestamps: true,
    }
);

const Actualite = mongoose.model('Actualite', actualiteSchema);
module.exports = Actualite;
