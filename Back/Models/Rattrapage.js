const mongoose = require('mongoose');

const baseOptions = {
    collection: 'Rattrapage'
};

const RattrapageSchema = new mongoose.Schema(
    {
        ID: {
            type: String,
            unique: true,
        },
        level: {
            type: String,
            required: true,
        },
        photo: {
            type: String,
            required: true,
        },
        date : {
            type: String 
        },
        horaire: {
            type: String
        },
        salle: {
            type: String
        }
       
        
    },
    baseOptions,
    {
        timestamps: true,
    }
);

const Rattrapage = mongoose.model('Rattrapage', RattrapageSchema);
module.exports = Rattrapage;
