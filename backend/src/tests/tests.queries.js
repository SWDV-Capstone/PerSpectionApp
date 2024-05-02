// Seperated from coltroller to keep code clean

// TEST QUERIES
const getTests = "SELECT * FROM tests" // GET
const getTestById = "SELECT * FROM tests WHERE id = $1" // GET
const deleteTestRow = "DELETE FROM tests WHERE id = $1" // DELETE
const addTestRow = "INSERT INTO tests (param1, param2, param3) VALUES ($1, $2, $3)" // POST
const checkIfTestParamExists = "SELECT t FROM tests t WHERE t.param1 = $1" // POST
// const updateTestRow = "UPDATE tests SET param1 = $1 WHERE id = $2"
const updateTestRow = "UPDATE tests SET param1 = $1, param2 = $2, param3 = $3 WHERE id = $4" // PUT

// POINT QUERIES
// const getPoints = "SELECT * FROM points"
// const getPointById = "SELECT * FROM points WHERE id = $1"
// const deletePointRow = "DELETE FROM points WHERE id = $1"
// const addPointRow = "INSERT INTO points (param1, param2, param3) VALUES ($1, $2, $3)"
// const checkIfPointParamExists = "SELECT t FROM points p WHERE p.param1 = $1"
// // const updateTestRow = "UPDATE tests SET param1 = $1 WHERE id = $2"
// const updatePointRow = "UPDATE points SET param1 = $1, param2 = $2, param3 = $3 WHERE id = $4"

// INSPECTION QUERIES
// const getInspections = "SELECT * FROM inspections"
// const getInspectionById = "SELECT * FROM inspections WHERE id = $1"
// const deleteInspectionRow = "DELETE FROM inspections WHERE id = $1"
// const addInspectionRow = "INSERT INTO inspections (param1, param2, param3) VALUES ($1, $2, $3)"
// const checkIfInspectionParamExists = "SELECT t FROM inspections i WHERE i.param1 = $1"
// // const updateInspectionRow = "UPDATE inspections SET param1 = $1 WHERE id = $2"
// const updateInspectionRow = "UPDATE inspections SET param1 = $1, param2 = $2, param3 = $3 WHERE id = $4"

module.exports = {
    // TEST QUERIES
    getTests,
    getTestById,
    deleteTestRow,
    addTestRow,
    checkIfTestParamExists,
    updateTestRow,
    // POINT QUERIES
    // getPoints,
    // getPointById,
    // deletePointRow,
    // addPointRow,
    // checkIfPointParamExists,
    // updatePointRow,
    // INSPECTION QUERIES
    // getInspections,
    // getInspectionById,
    // deleteInspectionRow,
    // addInspectionRow,
    // checkIfInspectionParamExists,
    // updateInspectionRow
}