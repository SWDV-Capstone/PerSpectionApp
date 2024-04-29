// Seperate from coltroller to keep code clean
const getInspections = "SELECT * FROM inspections"
const getInspectionById = "SELECT * FROM inspections WHERE id = $1"
const deleteInspectionRow = "DELETE FROM inspections WHERE id = $1"
const addInspectionRow = "INSERT INTO inspections (param1, param2, param3) VALUES ($1, $2, $3)"
const checkIfParamExists = "SELECT t FROM inspections i WHERE i.param1 = $1"
// const updateInspectionRow = "UPDATE inspections SET param1 = $1 WHERE id = $2"
const updateInspectionRow = "UPDATE inspections SET param1 = $1, param2 = $2, param3 = $3 WHERE id = $4"

module.exports = {
    getInspections,
    getInspectionById,
    deleteInspectionRow,
    addInspectionRow,
    checkIfParamExists,
    updateInspectionRow
}