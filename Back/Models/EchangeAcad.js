const mongoose = require('mongoose');


const baseOptions = {
    collection: 'EchangeAcad'
};

const EchangeAcadSchema = new mongoose.Schema(
    {

        ID: {
            type: String,
            required: true,
        },
        titre: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: false,
        },
        piece_jointe: {
            type: String,
            required: false,
        },
        photo: {
            type: String,
            required: false,
        },
        date: {
            type: Date,
            default: Date.now,
        },
        
    },
    baseOptions,
    {
        timestamps: true,
    }
);

const EchangeAcad = mongoose.model('EchangeAcad', EchangeAcadSchema);
module.exports = EchangeAcad;