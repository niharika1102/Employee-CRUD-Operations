// const express = require('express')
// const router = express.Router()

// const EmployeeController = require('../controllers/EmployeeController')

// router.get('/', EmployeeController.index)
// router.post('/show', EmployeeController.show)
// router.post('/store', EmployeeController.store)
// router.post('/update', EmployeeController.update)
// router.post('/delete', EmployeeController.destroy)

// module.exports = router

const express = require('express')
const router = express.Router()

const studentController = require('../controllers/EmployeeController')
router.get('/',studentController.index)
router.get('/getData',studentController.getData)
router.get('/createData',studentController.createData)
router.get('/updateData',studentController.updateData)
router.get('/delete',studentController.deleteData)

module.exports = router