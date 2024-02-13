const mongoose = require('mongoose');


const baseOptions = {
   
    collection: "Etudiant"
}

const EtudiantSchema = new mongoose.Schema({
    ID: {
        type: String,
        required: true,
        unique: true


    },
    num_inscription: {
        type: String,
        required: true,
        unique: true

    },
    photo: {
        type: String,
        required: false,
        default: null

    },
    nom: {
        type: String,
        required: true
    },
    prenom: {
        type: String,
        required: true
    },
    date_naissance: {
        type: Date,
        required: false,
        default: null

    },
    lieu_naissance: {
        type: String,
        required: false,
        default: null

    },
    nationalité: {
        type: String,
        required: false,
        default: null

    },
    sexe: {
        type: String,
        required: false,
        default: null

    },
    etat_civil: {
        type: String,
        required: false,
        default: null

    },
    nom_prenom_jeune_fille: {
        type: String,
        required: false,
        default: null

    },
    num_CNSS: {
        type: String,
        required: false,
        default: null

    },
    etat_militaire: {
        type: String,
        required: false,
        default: null

    },
    etat_militaire: {
        type: String,
        required: false,
        default: null

    },
    adresse: {
        type: String,
        required: false,
        default: null

    },
    code_postal: {
        type: String,
        required: false,
        default: null

    },
    num_telephone: {
        type: String,
        required: false,
        default: null

    },
    adresse_email: {
        type: String,
        required: false,
        /*validate: {
        validator: function(value) {
            // Utiliser une expression régulière pour vérifier si la valeur est une adresse e-mail valide
            // L'exemple suivant utilise une expression régulière simple, vous pouvez ajuster selon vos besoins.
            return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
        },
        message: 'Veuillez entrer une adresse e-mail valide'
    }*/
    default: null

    },
    profession: {
        type: String,
        required: false,
        default: null


    },
    cycle: {
        type: String,
        required: false,
        default: null


    },
    spécialité: {
        type: String,
        required: false,
        default: null

    },
    niveau_etude: {
        type: Number,
        required: false,
        default: null

    },
    TD: {
        type: Number,
        required: false,
        default: null

    },
    TP: {
        type: Number,
        required: false,
        default: null

    },
    situation: {
        type: String,
        required: false,
        default: null

    },
    ancien_etab: {
        type: String,
        required: false,
        default: null

    },
    annee_bac: {
        type: String,
        required: false,
        default: null

    },
    session_bac: {
        type: String,
        required: false,
        default: null

    },
    
    mention_bac: {
        type: String,
        required: false,
        default: null

    },
    moyenne_bac: {
        type: Number,
        required: false,
        default: null

    },
    pays_bac: {
        type: String,
        required: false,
        default: null

    },
    nom_pére: {
        type: String,
        required: false,
        default: null

    },
    prénom_pére: {
        type: String,
        required: false,
        default: null

    },
    profession_pére: {
        type: String,
        required: false,
        default: null

    },
    etab_employeur_pére: {
        type: String,
        required: false,
        default: null

    },
    nom_mére: {
        type: String,
        required: false,
        default: null

    },
    prénom_mére: {
        type: String,
        required: false,        
        default: null

    },
    profession_mére: {
        type: String,
        required: false,
        default: null

    },
    etab_employeur_mére: {
        type: String,
        required: false,
        default: null

    },
    adresse_parents: {
        type: String,
        required: false,
        default: null

    },
    code_postal_parents: {
        type: String,
        required: false,
        default: null

    },
    telephone_parent : {
        type: String,
        required: false,
        default: null

    },
    nom_conjoint: {
        type: String,
        required: false,
        default: null

    },
    prénom_conjoint: {
        type: String,
        required: false,
        default: null

    },
    profession_conjoint: {
        type: String,
        required: false,
        default: null

    },
    etab_employeur_conjoint: {
        type: String,
        required: false,
        default: null

    },
    nb_enfant: {
        type: Number,
        required: false,
        default: null

    },

    mot_de_passe: {
        type: String,
        required: false,
        default: null
        
    },
    inscri: {
        type: Boolean,
        default: false
    }

},baseOptions, 
{
    timestamps: true,
    
})

const Etudiant = mongoose.model('Etudiant', EtudiantSchema);
module.exports = Etudiant;