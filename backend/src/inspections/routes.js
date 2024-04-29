const { Router } = require('express')
const controller = require('./controller')

const router = Router()

router.get('/', controller.getInspections)
router.get('/:id', controller.getInspectionById)
router.delete('/:id', controller.deleteInspectionRow)
router.post('/', controller.addInspectionRow)
router.put('/:id', controller.updateInspectionRow)

module.exports = router