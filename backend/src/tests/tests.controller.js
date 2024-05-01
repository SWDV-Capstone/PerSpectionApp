const pool = require('../config/dataSource.ts')
const testsQueries = require('./tests.queries.js')

// TEST CONTROLLERS
const getTests = (req, res) => {
    console.log('GetTests controller')
    pool.query(testsQueries.getTests, (error, results) => {
        if (error) throw error
        res.status(200).json(results.rows)
    })
}
const getTestById = (req, res) => {
    const id = parseInt(req.params.id)
    console.log('GetTestById controller')
    pool.query(testsQueries.getTestById, [id], (error, results) => {
        if (error) throw error
        res.status(200).json(results.rows)
    })
}
const addTestRow = (req, res) => {
    const { param1, param2, param3 } = req.body
    console.log('AddTestRow controller')
    // check if param already exists
    pool.query(testsQueries.checkIfTestParamExists, [param1], (error, results) => {
        if (results.rows.length) {
            res.send('Test param exists')
            // console.log('Test param already exists')
        }
        console.log('Test param does not exist, adding...')
        // If not, Add test row
        pool.query(testsQueries.addTestRow, [param1, param2, param3], (error, results) => {
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
    pool.query(testsQueries.getTestById, [id], (error, results) => {
        if (!results.rows.length) {
            res.send('Test not found')
        }
        pool.query(testsQueries.deleteTestRow, [id], (error, results) => {
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
    pool.query(testsQueries.getTestById, [id], (error, results) => {
        if (!results.rows.length) {
            res.send('Test not found')
        }
        pool.query(testsQueries.updateTestRow, [param1, param2, param3, id], (error, results) => {
            if (error) throw error
        })
        res.status(200).send('Test updated')
    })
}

// POINT CONTROLLERS
// const getPoints = (req, res) => {
//     console.log('GetPoints controller')
//     pool.query(queries.getPoints, (error, results) => {
//         if (error) throw error
//         res.status(200).json(results.rows)
//     })
// }
// const getPointById = (req, res) => {
//     const id = parseInt(req.params.id)
//     console.log('GetPointById controller')
//     pool.query(queries.getPointById, [id], (error, results) => {
//         if (error) throw error
//         res.status(200).json(results.rows)
//     })
// }
// const addPointRow = (req, res) => {
//     const { param1, param2, param3 } = req.body
//     console.log('AddPointRow controller')
//     // check if param already exists
//     pool.query(queries.checkIfPointParamExists, [param1], (error, results) => {
//         if (results.rows.length) {
//             res.send('Point param exists')
//             // console.log('Point param already exists')
//         }
//         console.log('Point param does not exist, adding...')
//         // If not, Add point row
//         pool.query(queries.addPointRow, [param1, param2, param3], (error, results) => {
//             if (error) throw error
//             // res.status(201).send('point created').json(results.rows)
//             res.status(201).send('Point created')
//             console.log('Point created successfully')
//         })
//     })
// }
// const deletePointRow = (req, res) => {
//     const id = parseInt(req.params.id)
//     console.log('DeletePointRow controller')
//     // check if point exists
//     pool.query(queries.getPointById, [id], (error, results) => {
//         if (!results.rows.length) {
//             res.send('Point not found')
//         }
//         pool.query(queries.deletePointRow, [id], (error, results) => {
//             if (error) throw error
//         })
//         res.status(200).send('Point deleted')
//     })
// }
// const updatePointRow = (req, res) => {
//     const id = parseInt(req.params.id)
//     const { param1, param2, param3 } = req.body
//     console.log('UpdatePointRow controller')
//     // check if point exists
//     pool.query(queries.getPointById, [id], (error, results) => {
//         if (!results.rows.length) {
//             res.send('Point not found')
//         }
//         pool.query(queries.updatePointRow, [param1, param2, param3, id], (error, results) => {
//             if (error) throw error
//         })
//         res.status(200).send('Point updated')
//     })
// }


// INSPECTION CONTROLLERS
// const getInspections = (req, res) => {
//     console.log('GetInspections controller')
//     pool.query(queries.getInspections, (error, results) => {
//         if (error) throw error
//         res.status(200).json(results.rows)
//     })
// }
// const getInspectionById = (req, res) => {
//     const id = parseInt(req.params.id)
//     console.log('GetInspectionById controller')
//     pool.query(queries.getInspectionById, [id], (error, results) => {
//         if (error) throw error
//         res.status(200).json(results.rows)
//     })
// }
// const addInspectionRow = (req, res) => {
//     const { param1, param2, param3 } = req.body
//     console.log('AddInspectionRow controller')
//     // check if param already exists
//     pool.query(queries.checkIfInspectionParamExists, [param1], (error, results) => {
//         if (results.rows.length) {
//             res.send('Inspection param exists')
//             // console.log('Inspection param already exists')
//         }
//         console.log('Inspection param does not exist, adding...')
//         // If not, Add inspection row
//         pool.query(queries.addInspectionRow, [param1, param2, param3], (error, results) => {
//             if (error) throw error
//             // res.status(201).send('Inspection created').json(results.rows)
//             res.status(201).send('Inspection created')
//             console.log('Inspection created successfully')
//         })
//     })
// }
// const deleteInspectionRow = (req, res) => {
//     const id = parseInt(req.params.id)
//     console.log('DeleteInspectionRow controller')
//     // check if inspection exists
//     pool.query(queries.getInspectionById, [id], (error, results) => {
//         if (!results.rows.length) {
//             res.send('Inspection not found')
//         }
//         pool.query(queries.deleteInspectionRow, [id], (error, results) => {
//             if (error) throw error
//         })
//         res.status(200).send('Inspection deleted')
//     })
// }
// const updateInspectionRow = (req, res) => {
//     const id = parseInt(req.params.id)
//     const { param1, param2, param3 } = req.body
//     console.log('UpdateInspectionRow controller')
//     // check if inspection exists
//     pool.query(queries.getInspectionById, [id], (error, results) => {
//         if (!results.rows.length) {
//             res.send('Inspection not found')
//         }
//         pool.query(queries.updateInspectionRow, [param1, param2, param3, id], (error, results) => {
//             if (error) throw error
//         })
//         res.status(200).send('Inspection updated')
//     })
// }


module.exports = {
    // TEST CONTROLLERS
    getTests,
    getTestById,
    deleteTestRow,
    addTestRow,
    updateTestRow,
    // POINT CONTROLLERS
    // getPoints,
    // getPointById,
    // deletePointRow,
    // addPointRow,
    // updatePointRow,
    // INSPECTION CONTROLLERS
    // getInspections,
    // getInspectionById,
    // deleteInspectionRow,
    // addInspectionRow,
    // updateInspectionRow,
}