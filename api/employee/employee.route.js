/*
The code below will change act as router for employee service
*/
var Employee = require('../../controller/employee');
const Joi = require('joi')
const validator = require('express-joi-validation').createValidator({});

const querySchemaCreateOrGetAllEmployee = Joi.object({
    name: Joi.string().required(),
    id: Joi.string().required(),
    department: Joi.string().required()
});

const querySchemaGetEmployee = Joi.object({
    name: Joi.string().required()
});

const querySchemaUpdateOrDeleteEmployee = Joi.object({
    id: Joi.string().required()
});

module.exports = function (router) {
    router.post('/create', validator.body(querySchemaCreateOrGetAllEmployee),Employee.createEmployee);
    router.get('/get', Employee.getEmployees);
    router.get('/get/:name', validator.params(querySchemaGetEmployee), Employee.getEmployee);
    router.put('/update/:id', validator.params(querySchemaUpdateOrDeleteEmployee), Employee.updateEmployee);
    router.delete('/remove/:id', validator.params(querySchemaUpdateOrDeleteEmployee), Employee.removeEmployee);
}