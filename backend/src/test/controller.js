const pool = require('../../../database/db')
const queries = require('./queries')

const getTests = (req, res) => {
    console.log('GetTests controller')

    pool.query(queries.getTests, (error, results) => {
        if (error) throw error
        res.status(200).json(results.rows)
    })
}

const getTestById = (req, res) => {
    const id = parseInt(req.params.id)
    console.log('GetTestById controller')

    pool.query(queries.getTestById, [id], (error, results) => {
        if (error) throw error
        res.status(200).json(results.rows)
    })
}

const addTestRow = (req, res) => {
    const { param1, param2, param3 } = req.body
    console.log('AddTestRow controller')

    // check if param already exists
    pool.query(queries.checkIfParamExists, [param1], (error, results) => {
        if (results.rows.length) {
            res.send('Test param exists')
            // console.log('Test param already exists')
        }
        console.log('Test param does not exist, adding...')

        // If not, Add test row
        pool.query(queries.addTestRow, [param1, param2, param3], (error, results) => {
            if (error) throw error
            // res.status(201).send('Test created').json(results.rows)
            res.status(201).send('Test created')
            console.log('Test created successfully')
        })
    })
}

const deleteTestRow = (req, res) => {
    const id = parseInt(req.params.id)
    console.log('DeleteTestRow controller')

    // check if test exists
    pool.query(queries.getTestById, [id], (error, results) => {
        if (!results.rows.length) {
            res.send('Test not found')
        }
        pool.query(queries.deleteTestRow, [id], (error, results) => {
            if (error) throw error
        })
        res.status(200).send('Test deleted')
    })
}

const updateTestRow = (req, res) => {
    const id = parseInt(req.params.id)
    const { param1, param2, param3 } = req.body
    console.log('UpdateTestRow controller')

    // check if test exists
    pool.query(queries.getTestById, [id], (error, results) => {
        if (!results.rows.length) {
            res.send('Test not found')
        }
        pool.query(queries.updateTestRow, [param1, param2, param3, id], (error, results) => {
            if (error) throw error
        })
        res.status(200).send('Test updated')
    })
}

module.exports = {
    getTests,
    getTestById,
    deleteTestRow,
    addTestRow,
    updateTestRow
}