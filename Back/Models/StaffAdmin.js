const mongoose = require('mongoose');


const baseOptions = {
   
    collection: "StaffAdministratif"
    
    
}

const StaffSchema = new mongoose.Schema({


    cin: {
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
        required: false,
    },
    email: {
        type: String,
        required: true,
    },
    photo: {
        type: String,
        required: false,
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