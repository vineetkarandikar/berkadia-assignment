/*
The code below act as service layer for employee based ops.
*/
var Employee = require('../doa/employee');
var log = require('../logger');
var datetime = new Date();

//create employee
exports.createEmployee = async function (req, res, next) {
    var employee = {
        name: req.body.name,
        id: req.body.id,
        department: req.body.department
    };
    let result = await Employee.create(employee);
    if (result) {
        let message = "Employee created successfully";
        log.info(datetime + " === " + message);
        res.json({ message });
    } else {
        log.error(datetime + " === " + result);
        res.json({ error: result });
    }
}

//get all the employees' details present
exports.getEmployees = async function (req, res, next) {
    let result = await Employee.get({});
    if (result) {
        log.info(datetime + " === " + result);
        res.json({ employees: result });
    } else {
        log.error(datetime + " === " + result);
        res.json({ error: result });
    }
}

//get employees details based on employee name.
exports.getEmployee = async function (req, res, next) {
    let result = await Employee.getByName({ name: req.params.name });
    log.info(req.params.name);
    if (result) {
        log.info(datetime + " === " + result);
        res.json({ employee: result });
    } else {
        log.error(datetime + " === " + result);
        res.json({ error: result });
    }
}

//update employee detail
exports.updateEmployee = async function (req, res, next) {
    var employee = {
        name: req.body.name,
        id: req.body.id,
        department: req.body.department
    }

    log.info("Updating employee ===== " + employee);

    let result = await Employee.update({ _id: req.params.id }, employee);
    if (result) {
        log.info(datetime + " === " + result);
        res.json({ message: "Employee updated successfully" });
    } else {
        log.error(datetime + " === " + result);
        res.json({ error: result });
    }
}

//remove employee
exports.removeEmployee = async function (req, res, next) {
    let result = await Employee.delete({ _id: req.params.id });
    log.info("Employee deletion started !");
    if (result) {
        log.info(datetime + " === " + result);
        res.json({ message: "Employee deleted successfully" });
    }
    else {
        log.error(datetime + " === " + message);
        res.json({ error: result });
    }
}