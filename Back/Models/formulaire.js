const mongoose = require('mongoose');
const baseOptions = {
   
    collection: "DemandeFormulaires"
    

}
const FormSchema = new mongoose.Schema({ 

    ID: {
        type:String,
        required:true
    },
    nom: {
        type:String,
        required: true

    },
    prenom:{
        type:String,
        required: true

    },
    
    num_insc :{
        type:String,
        required: false,
        default:null


    },
    
    groupe :{
        type:String,
        required: false,
        default:null


    },
    cin2 :{
        type:String,
        required: false,
        default:null


    },
    cause_demande :{
        type:String,
        required: false,
        default:null


    },
    num_tel :{
        type:String,
        required: false,
        defaut:null

    },
    
    doc_admini: {
        type: String,
        enum: ['Certificat de démarcation', 'Carte dEtudiant', 'Relevet de note', 'Certificat de fin dEtudes', 'Autres'],
        required: false ,
        default:null

    },


    faute :{
        type:String,
        required: false,
        defaut:null


    },
    annee_univ : {
        type:String,
        required: false,
        defaut:null


    },



    })

const Form = mongoose.model('formulaire', FormSchema);
module.exports = Form;