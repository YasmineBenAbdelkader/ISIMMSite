const mongoose = require('mongoose');
const baseOptions = {
   
    collection: "DemandeFormulaires"
    

}
const FormSchema = new mongoose.Schema({ 

    ID: {
        type:String,
        required:false
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


    },
    
    groupe :{
        type:String,
        required: false,


    },
    cin2 :{
        type:String,
        required: false,


    },
    cause_demande :{
        type:String,
        required: false,


    },
    num_tel :{
        type:String,
        required: false,

    },
    
    doc_admini: {
        type: String,
        required: false,

    },


    faute :{
        type:String,
        required: false,


    },
    annee_univ : {
        type:String,
        required: false,


    },
    etabli2 :{
        type:String,
        required: false,
    },
    langue : {
        type:String,
        required: false,

    },
    etat : {
        type:String,
        required: false,
        default:"non_traite"
    },
    type : {
        type:String,
        required: true,

    },
   



    })

const Form = mongoose.model('formulaire', FormSchema);
module.exports = Form;