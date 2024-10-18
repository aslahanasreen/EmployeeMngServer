const express = require('express')
const empController = require('../controllers/empController')

const router = express.Router()

router.post('/addemp',empController.addEmployee)
router.get('/employee',empController.getEmployees)
router.delete('/dltemp/:id',empController.deleteEmployee)
router.put('/updateemp/:id',empController.updateEmployee)


module.exports = router