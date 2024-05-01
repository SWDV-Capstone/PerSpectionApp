const express = require('express')
const app = express()
// app.use(express.json())

const cors = require("cors");
app.use(cors());

app.get('/', (req, res, next) => {
    res.send('Hello Middleware Server!')
    next();
})

// const perspectionRoutes = require('./src/perspectionDb/routes')
// app.use('/perspectionDb', perspectionRoutes)
// app.get('/perspectionDb', (req, res, next) => {
//     res.send('Hello PerspectionDb Server!')
//     next();
// })

const testRoutes = require('./src/tests/routes')
app.use('/tests', testRoutes)
app.get('/tests', (req, res, next) => {
    res.send('Hello Tests Server!')
    next();
})

const pointRoutes = require('./src/points/points.routes')
app.use('/points', pointRoutes)
app.get('/points', (req, res, next) => {
    res.send('Hello Points Server!')
    next();
})

// const inspectionRoutes = require('./src/inspections/routes')
// app.use('/inspections', inspectionRoutes)
// app.get('/inspections', (req, res, next) => {
//     res.send('Hello Inspections Server!')
//     next();
// })

require('dotenv').config()

const port = process.env.PORT || 3000

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    next();
});

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})



// const { Sequelize } = require('sequelize')
// Set up the connection to the database
// const sequelize = new Sequelize(process.env.DB_URL, {
//     dialect: 'postgres',
//     logging: false,
//     dialectOptions: {
//         ssl: {
//             require: true,
//             rejectUnauthorized: false
//         }
//     }
// })
// Test the connection
// sequelize.sync()
//     .then(() => {
//         console.log('Database connected')
//     })
//     .catch((err) => {
//         console.log('Error connecting to database', err)
//     })