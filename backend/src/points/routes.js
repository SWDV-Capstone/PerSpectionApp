const { Router } = require('express')
const controller = require('./controller')

const router = Router()

// POINT ROUTES
router.get('/', controller.getPoints)
router.get('/:id', controller.getPointById)
router.delete('/:id', controller.deletePointRow)
router.post('/', controller.addPointRow)
router.put('/:id', controller.updatePointRow)

module.exports = router