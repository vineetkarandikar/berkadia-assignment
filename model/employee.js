var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var employeeSchema = new Schema({
    name: {
        type: String,
        unique: false,
        required: true
    },
    id: {
        type: String,
        unique: true,
        required: true
    },
    department: {
        type: String,
        unique: false,
        required: true
    }
}, {
    timestamps: true
});

module.exports = employeeSchema;