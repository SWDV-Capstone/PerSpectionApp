const { Router } = require('express')
const inspectionsController = require('./inspections.controller')

const inspectionsRouter = Router()

inspectionsRouter.get('/', inspectionsController.getInspections)
inspectionsRouter.get('/:id', inspectionsController.getInspectionById)
inspectionsRouter.delete('/:id', inspectionsController.deleteInspectionRow)
inspectionsRouter.post('/', inspectionsController.addInspectionRow)
inspectionsRouter.put('/:id', inspectionsController.updateInspectionRow)

module.exports = inspectionsRouter