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
    email: {
        type: String,
        required: true,
    },
    keyArea: {
        type: String,
        required: true,
    },
    
},baseOptions, 
{
    timestamps: true,
    
})

const Staff = mongoose.model('StaffAdmin', StaffSchema);
module.exports = Staff;