const mongoose = require('mongoose');
const baseOptions = {
   
    collection: "Even4C"
    
}
const CSchema = new mongoose.Schema({
    ID: {
        type:String,
        required:true
    },
    titre: {
        type: String,
        required:true
    },
    lieu: {
        type: String,
        required:true
    },
    date: {
        type: Date,
        required:true,
        default:null
    },
    description: {
        type: String,
        required:true
    },
    photo: {
        type: String,
        required:false,
        default: null
    },
    facebook: {
        type: String,
        required:false,
        default: null

    },
    insta: {
        type: String,
        required:false,
        default: null

    },
    linkedin: {
        type: String,
        required:false,
        default: null

    },
    isLatest: {
        type: Boolean,
        default: false
    }



    },baseOptions, 
    {
    timestamps: true,
            
    })





const Event4C = mongoose.model('Event4C', CSchema);
module.exports = Event4C;