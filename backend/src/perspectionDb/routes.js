const { Router } = require('express')
const controller = require('./controller')

const router = Router()

// TEST ROUTES
router.get('/tests/', controller.getTests)
router.get('/:id', controller.getTestById)
router.delete('/:id', controller.deleteTestRow)
router.post('/', controller.addTestRow)
router.put('/:id', controller.updateTestRow)

// POINT ROUTES
router.get('/points/', controller.getPoints)
router.get('/:id', controller.getPointById)
router.delete('/:id', controller.deletePointRow)
router.post('/', controller.addPointRow)
router.put('/:id', controller.updatePointRow)

// INSPECTION ROUTES
router.get('/', controller.getInspections)
router.get('/:id', controller.getInspectionById)
router.delete('/:id', controller.deleteInspectionRow)
router.post('/', controller.addInspectionRow)
router.put('/:id', controller.updateInspectionRow)

module.exports = router