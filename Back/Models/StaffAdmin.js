const mongoose = require('mongoose');


const baseOptions = {
   
    collection: "StaffAdministratif"
    
    
}

const StaffSchema = new mongoose.Schema({


    ID: {
        type: String,
        required: true,
        unique: true
    },
    nom: {
        type: String,
        required: true,
    },
    prenom: {
        type: String,
        required: true,
    },
    poste: {
        type: String,
        required: true,
    },
    grade: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    photo: {
        type: String,
        required: true,
    },
    /** C'est quoi key area  */
    keyArea: {
        type: String,
        required: false,
    },
    
},baseOptions, 
{
    timestamps: true,
    
})

const Staff = mongoose.model('StaffAdmin', StaffSchema);
module.exports = Staff;