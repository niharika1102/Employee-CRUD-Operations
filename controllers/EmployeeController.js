const { response } = require('express')
const Employee = require('../models/Employee')

//Show list of employees
const index = (req, res, next) => {
    Employee.find()

    //This is a promise
    .then(response => {
        res.json({
            response
        })
    })

    .catch(error => {
        res.json({
            message: 'An error occured!'
        })
    })
}

const show = (req, res, next) => {
    let employeeID = req.body.employeeID
    Employee.findById(employeeID)
    .then (response => {
        res.json({
            response
        })
    })

    .catch(error => {
        res.json ({
            message: "An error occured!"
        })
    })
}

//Adding employee to database
const store = (req, res, next) => {
    let employee = new Employee ({
        name: req.body.name,
        designation: req.body.designation,
        email: req.body.email,
        phone: req.body.phone,
        age: req.body.age
    })

    employee.save()
    //A promise to check if the employee is saved successfully
    .then(response => {
        res.json ({
            message: "Employee added successfully!"
        })
    })

    .catch(error => {
        res.json({
            message: "An error occured!" + error ,
        })
    })
}

//Updating an employee using EID
const update = (req, res, next) => {
    let employeeID = req.body.employeeID    //ID of the employee to be updated

    let updatedData = {   //Changed data
        name: req.body.name,
        designation: req.body.designation,
        email: req.body.email,
        phone: req.body.phone,
        age: req.body.age
    }

    Employee.findByIdAndUpdate(employeeID, {$set: updatedData})
    .then(() => {
        res.json({
            message: "Employee update successful!"
        })
    })

    .catch (error => {
        res.json({
            message: "An error occured!"
        })
    })
}

//Deleting an employee
const destroy = (req, res, next) => {
    let employeeID = req.body.employeeID

    Employee.findOneAndDelete(employeeID)
    .then (() => {
        res.json({
            message: 'Employee delete successful!'
        })
    })

    .catch(error => {
        res.json({
            message: "An error occured!"
        })
    })
}

//Exporting functions
module.exports = {
    index, show, store, update, destroy
}