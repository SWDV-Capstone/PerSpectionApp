// Seperate from coltroller to keep code clean
const getTests = "SELECT * FROM tests"
const getTestById = "SELECT * FROM tests WHERE id = $1"
const deleteTestRow = "DELETE FROM tests WHERE id = $1"
const addTestRow = "INSERT INTO tests (param1, param2, param3) VALUES ($1, $2, $3)"
const checkIfParamExists = "SELECT t FROM tests t WHERE t.param1 = $1"
// const updateTestRow = "UPDATE tests SET param1 = $1 WHERE id = $2"
const updateTestRow = "UPDATE tests SET param1 = $1, param2 = $2, param3 = $3 WHERE id = $4"

module.exports = {
    getTests,
    getTestById,
    deleteTestRow,
    addTestRow,
    checkIfParamExists,
    updateTestRow
}