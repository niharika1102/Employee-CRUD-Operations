// const mongoose = require('mongoose')
// const Schema = mongoose.Schema

// const employeeSchema = new Schema ({
//     name: {
//         type: String
//     },
//     designation: {
//         type: String
//     },
//     email: {
//         type: String
//     },
//     phone: {
//         type: String
//     },
//     age: {
//         type: Number
//     }
// }, {timestamps: true})

// const Employee = mongoose.model('Employee', employeeSchema)
// module.exports = Employee.

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentSchema = new Schema({
    name:{
        type: String
    },
    Batch:{
        type: Number
    },
    age:{
        type: Number
    },
    email:{
        type: String
    }
} , {timestamps: true})

const Student = mongoose.model('Student',studentSchema);
module.exports = Student;