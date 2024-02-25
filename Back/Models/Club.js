const mongoose = require('mongoose');
const baseOptions = {
   
    collection: "Club"

}
const ClubSchema = new mongoose.Schema({ 

    ID: {
        type:String,
        required:true
    },
    nom_club :{
        type:String,
        required: true

    },
    nom_pres :{
        type:String,
        required: false


    },
    domaine :{
        type:String,
        required: true

    },
    logo :{
        type:String,
        required: false

    },
    
    membre1 :{
        type:String,
        required: false

    },
    membre2 :{
        type:String,
        required: false

    },
    membre3 :{
        type:String,
        required: false

    },
    membre4 :{
        type:String,
        required: false,
        defaut:null

    },
    
    site :{
        type:String,
        required: false,
        defaut:null


    },
    linkedIn :{
        type:String,
        required: false,
        defaut:null


    },
    facebook :{
        type:String,
        required: false,
        defaut:null


    },
    desc :{
        type:String,
        required: false,
        defaut:null


    },
    nbr_membre :{
        type:String,
        required: false,
        defaut:null

    },
    encadrant :{
        type:String,
        required: false,
        defaut:null


    },
    annee_univ :{
        type:String,
        required: false, 
        defaut:null


    },



    })

const Club = mongoose.model('Club', ClubSchema);
module.exports = Club;