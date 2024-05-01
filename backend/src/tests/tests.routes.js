const { Router } = require('express')
const testsController = require('./tests.controller')

const testsRouter = Router()

// TESTS ROUTES
testsRouter.get('/', testsController.getTests)
testsRouter.get('/:id', testsController.getTestById)
testsRouter.delete('/:id', testsController.deleteTestRow)
testsRouter.post('/', testsController.addTestRow)
testsRouter.put('/:id', testsController.updateTestRow)

module.exports = testsRouter



// POINT ROUTES
// router.get('/points/', controller.getPoints)
// router.get('/:id', controller.getPointById)
// router.delete('/:id', controller.deletePointRow)
// router.post('/', controller.addPointRow)
// router.put('/:id', controller.updatePointRow)

// INSPECTION ROUTES
// router.get('/', controller.getInspections)
// router.get('/:id', controller.getInspectionById)
// router.delete('/:id', controller.deleteInspectionRow)
// router.post('/', controller.addInspectionRow)
// router.put('/:id', controller.updateInspectionRow)

