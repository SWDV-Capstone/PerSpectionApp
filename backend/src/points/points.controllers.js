const pool = require('../config/dataSource.ts')
const pointsQueries = require('./points.queries.js')

// POINTS CONTROLLERS
const getPoints = (req, res) => {
    console.log('GetPoints controller')
    pool.query(pointsQueries.getPoints, (error, results) => {
        if (error) throw error
        res.status(200).json(results.rows)
    })
}
const getPointById = (req, res) => {
    const id = parseInt(req.params.id)
    console.log('GetPointById controller')
    pool.query(pointsQueries.getPointById, [id], (error, results) => {
        if (error) throw error
        res.status(200).json(results.rows)
    })
}
const addPointRow = (req, res) => {
    const { param1, param2, param3 } = req.body
    console.log('AddPointRow controller')
    // check if param already exists
    pool.query(pointsQueries.checkIfPointParamExists, [param1], (error, results) => {
        if (results.rows.length) {
            res.send('Point param exists')
            // console.log('Point param already exists')
        }
        console.log('Point param does not exist, adding...')
        // If not, Add point row
        pool.query(pointsQueries.addPointRow, [param1, param2, param3], (error, results) => {
            if (error) throw error
            // res.status(201).send('point created').json(results.rows)
            res.status(201).send('Point created')
            console.log('Point created successfully')
        })
    })
}
const deletePointRow = (req, res) => {
    const id = parseInt(req.params.id)
    console.log('DeletePointRow controller')
    // check if point exists
    pool.query(pointsQueries.getPointById, [id], (error, results) => {
        if (!results.rows.length) {
            res.send('Point not found')
        }
        pool.query(pointsQueries.deletePointRow, [id], (error, results) => {
            if (error) throw error
        })
        res.status(200).send('Point deleted')
    })
}
const updatePointRow = (req, res) => {
    const id = parseInt(req.params.id)
    const { param1, param2, param3 } = req.body
    console.log('UpdatePointRow controller')
    // check if point exists
    pool.query(pointsQueries.getPointById, [id], (error, results) => {
        if (!results.rows.length) {
            res.send('Point not found')
        }
        pool.query(pointsQueries.updatePointRow, [param1, param2, param3, id], (error, results) => {
            if (error) throw error
        })
        res.status(200).send('Point updated')
    })
}

module.exports = {
    getPoints,
    getPointById,
    deletePointRow,
    addPointRow,
    updatePointRow
}