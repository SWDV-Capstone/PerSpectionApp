// Seperated from coltroller to keep code clean

// POINT QUERIES
const getPoints = "SELECT * FROM points"
const getPointById = "SELECT * FROM points WHERE id = $1"
const deletePointRow = "DELETE FROM points WHERE id = $1"
const addPointRow = "INSERT INTO points (param1, param2, param3) VALUES ($1, $2, $3)"
const checkIfPointParamExists = "SELECT p FROM points p WHERE p.param1 = $1"
const updatePointRow = "UPDATE points SET param1 = $1, param2 = $2, param3 = $3 WHERE id = $4"

module.exports = {
    getPoints,
    getPointById,
    deletePointRow,
    addPointRow,
    checkIfPointParamExists,
    updatePointRow
}