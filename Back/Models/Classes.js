const mongoose = require('mongoose');

const baseOptions = {
    collection: 'Classes'
};

const ClassesSchema = new mongoose.Schema(
    {
        titre: {
            type: String,
            required: true,
        }
        
    },
    baseOptions,
    {
        timestamps: true,
    }
);

const Classe = mongoose.model('Classe', ClassesSchema);
module.exports = Classe;
