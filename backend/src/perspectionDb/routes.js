const { Router } = require('express')
const controller = require('./controller')

const router = Router()

router.get('/', controller.getTests)
router.get('/:id', controller.getTestById)
router.delete('/:id', controller.deleteTestRow)
router.post('/', controller.addTestRow)
router.put('/:id', controller.updateTestRow)

module.exports = router