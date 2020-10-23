/*
The code below act as database access layer for employee based ops.
*/

var mongoose = require('mongoose');
var employeeSchema = require('../model/employee');

employeeSchema.statics = {
    create: async function (data) {
        var employee = new this(data);
        let result = await employee.save();
        return result;
    },

    get: async function (query) {
        let result = await this.find(query);
        return result;
    },

    getByName: async function (query) {
        let result = await this.find(query);
        return result;
    },

    update: async function (query, updateData) {
        let result = await this.findOneAndUpdate(query, { $set: updateData }, { new: true });
        return result;
    },

    delete: async function (query) {
        let result = await this.findOneAndDelete(query);
        return result;
    }
}

var employeeModel = mongoose.model('Employee', employeeSchema);
module.exports = employeeModel;