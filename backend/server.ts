const express = require('express')
const cors = require("cors");
const perspectionRoutes = require('./src/perspectionDb/routes')

require('dotenv').config()
// const { Sequelize } = require('sequelize')

const app = express()
app.use(cors());
const port = process.env.PORT || 3000

// app.use(express.json())
// app.use((req, res, next) => {
//     req.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Origin', '*');
//     next();
//   });
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "*");
    next();
});


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

// Define the routes
app.get('/', (req, res) => {
    res.send('Hello Middleware!')
})
app.get('/tests', (req, res) => {
    res.send('Hello Tests!')
})
app.get('/points', (req, res) => {
    res.send('Hello Points!')
})
app.get('/perspectionDb', (req, res) => {
    res.send('Hello PerspectionDb!')
})

app.use('/perspectionDb', perspectionRoutes)
// app.use(/\/tests|\/perspectionDb/, function (req, res, next) {
//     next()
// })

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})