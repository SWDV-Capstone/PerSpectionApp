const pool = require('../config/dataSource.ts')
const inspectionsQueries = require('./inspections.queries.js')

// INSPECTION CONTROLLERS
const getInspections = (req, res) => {
    console.log('GetInspections controller')
    pool.query(inspectionsQueries.getInspections, (error, results) => {
        if (error) throw error
        res.status(200).json(results.rows)
    })
}
const getInspectionById = (req, res) => {
    const id = parseInt(req.params.id)
    console.log('GetInspectionById controller')
    pool.query(inspectionsQueries.getInspectionById, [id], (error, results) => {
        if (error) throw error
        res.status(200).json(results.rows)
    })
}
const addInspectionRow = (req, res) => {
    const { param1, param2, param3 } = req.body
    console.log('AddInspectionRow controller')
    // check if param already exists
    pool.query(inspectionsQueries.checkIfInspectionParamExists, [param1], (error, results) => {
        if (results.rows.length) {
            res.send('Inspection param exists')
            // console.log('Inspection param already exists')
        }
        console.log('Inspection param does not exist, adding...')
        // If not, Add inspection row
        pool.query(inspectionsQueries.addInspectionRow, [param1, param2, param3], (error, results) => {
            if (error) throw error
            // res.status(201).send('Inspection created').json(results.rows)
            res.status(201).send('Inspection created')
            console.log('Inspection created successfully')
        })
    })
}
const deleteInspectionRow = (req, res) => {
    const id = parseInt(req.params.id)
    console.log('DeleteInspectionRow controller')
    // check if inspection exists
    pool.query(inspectionsQueries.getInspectionById, [id], (error, results) => {
        if (!results.rows.length) {
            res.send('Inspection not found')
        }
        pool.query(inspectionsQueries.deleteInspectionRow, [id], (error, results) => {
            if (error) throw error
        })
        res.status(200).send('Inspection deleted')
    })
}
const updateInspectionRow = (req, res) => {
    const id = parseInt(req.params.id)
    const { param1, param2, param3 } = req.body
    console.log('UpdateInspectionRow controller')
    // check if inspection exists
    pool.query(inspectionsQueries.getInspectionById, [id], (error, results) => {
        if (!results.rows.length) {
            res.send('Inspection not found')
        }
        pool.query(inspectionsQueries.updateInspectionRow, [param1, param2, param3, id], (error, results) => {
            if (error) throw error
        })
        res.status(200).send('Inspection updated')
    })
}

module.exports = {
    getInspections,
    getInspectionById,
    deleteInspectionRow,
    addInspectionRow,
    updateInspectionRow
}