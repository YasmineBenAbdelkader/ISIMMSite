const mongoose = require('mongoose');


const baseOptions = {
   
    collection: "Enseignant"
    
}

const EnseignantSchema = new mongoose.Schema({
    ID: {
        type: String,
        required: true,
        unique: true
    },

    matricule: {
        type: String,
        required: true,
        unique: true

    },
    nom: {
        type: String,
        required: true
    },
    prenom: {
        type: String,
        required: true
    },
    grade: {
        type: String,
        required: true

    },
    photo: {
        type: String,
        required: false,
        default: null

    },
    
    date_naissance: {
        type: Date,
        required: false,
        default: null

    },
    adresse: {
        type: String,
        required: false,
        default: null


    },
    email: {
        type: String,
        required: false,
        default: null
    },
    telephone: {
        type: String,
        required: false,
        default: null

    },
    diplomes: [{
        type: String,
        required: false,
        default: null

    }],
    specialite: {
        type: String,
        required: false,
        default: null

    },
    
    date_embauche: {
        type: Date,
        required: false,
        default: null

    },

    cours: [{
        nom: {
            type: String,
            required: false,  
             default: null

        },
        niveau: {
            type: String,
            required: false,
            default: null

        }
    }],
    mot_de_passe: {
    type: String,
    required: false,
    default: null
    
},

enregistre: {
    type: Boolean,
    default: false
}





},baseOptions, 
{
    timestamps: true,
    
})

const Enseignant = mongoose.model('Enseignant', EnseignantSchema);
module.exports = Enseignant;