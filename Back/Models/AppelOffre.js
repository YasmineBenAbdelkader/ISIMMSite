const mongoose = require('mongoose');
const PubAppelOffre = require('../Models/PubAppelOffre'); 

const baseOptions = {
    collection: 'AppelDOffre'
};

const AppelOffreSchema = new mongoose.Schema(
    {
        Nom : {
            type: String,
            required: false,
    
        },
        prenom : {
            type: String,
            required: false,
    
        },
        Matricule_fiscale : {
            type: String,
            required: false,
    
        },
        Email : {
            type: String,
            required: false,
    
        },
        Adresse : {
            type: String,
            required: false,
    
        },
        Téléphone : {
            type: String,
            required: false,
    
        },
        Fichier : {
            type: String,
            required: false,
    
        },
        PubAppelOffre: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'PubAppelOffre',
        },
        
    },
    baseOptions,
    {
        timestamps: true,
    }
);

const AppelOffre = mongoose.model('AppelOffre', AppelOffreSchema);
module.exports = AppelOffre;