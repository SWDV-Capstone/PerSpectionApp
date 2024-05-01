const { Router } = require('express')
const pointsController = require('./points.controllers')

const pointsRouter = Router()

// POINT ROUTES
pointsRouter.get('/', pointsController.getPoints)
pointsRouter.get('/:id', pointsController.getPointById)
pointsRouter.delete('/:id', pointsController.deletePointRow)
pointsRouter.post('/', pointsController.addPointRow)
pointsRouter.put('/:id', pointsController.updatePointRow)

module.exports = pointsRouter



// const express = require('express');
// const pointsRoutes = express.Router();
// const pointsController = require('./controller');

// pointsRoutes.get('/', pointsController.points);
 
// module.exports = pointsRoutes;
