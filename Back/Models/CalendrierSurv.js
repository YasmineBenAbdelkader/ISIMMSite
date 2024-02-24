const mongoose = require('mongoose');

const baseOptions = {
    collection: 'Calendrier_surveillance'
};

const CalSurvSchema = new mongoose.Schema(
    {
        Calendrier: {
            type: String,
            required: true,
        }, 
        enseignant :{
            type: String,
            required: false,
        }
    },
    baseOptions,
    {
        timestamps: true,
    }
);

const CalSurv = mongoose.model('CalSurv', CalSurvSchema);
module.exports = CalSurv;