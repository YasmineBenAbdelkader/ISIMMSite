const mongoose = require('mongoose');


const baseOptions = {
   
    collection: "Enseignant"
    
}

const EnseignantSchema = new mongoose.Schema({


    // Ajout par admin
    cin: {
        type: String,
        required: false
    },
    nom: {
        type: String,
        required: true
    },
    prenom: {
        type: String,
        required: true
    },
    num_inscription: {
        type: String,
        required: true
    },
    grade: {
        type: String,
        required: false

    },
    chefDep: {
        type: String,
        required: false,
        default: null
    },

    //inscription
    // poste = enseignant

    Poste: {
        type: String,
        required: false,
        default: null


    },
    adresse_email: {
        type: String,
        required: false,
        default: null

    },
    num_telephone: {
        type: String,
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
        efault: false

    },

    // complete account 
    photo: {
        type: String,
        required: false,
        default: null

    },
    date_naissance: {
        type: String,
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
    cv: {
        type: String,
        required: false,
        default: null


    },
    specialite: {
        type: String,
        required: false,
        default: null

    },
    date_embauche: {
        type: String,
        required: false,
        default: null

    },
    cours: [{
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
    }, 

    chefDep: {
        type: String,
        required: false,
        default: null
    },

    
    event : {
        type: String,
        required: false,
    }



    }],
  
  

},baseOptions, 
{
    timestamps: true,
    
})

const Enseignant = mongoose.model('Enseignant', EnseignantSchema);
module.exports = Enseignant;