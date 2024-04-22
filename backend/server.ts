const express = require('express')
const cors = require("cors");

const testRoutes = require('./src/test/routes')

require('dotenv').config()
const { Sequelize } = require('sequelize')

const app = express()
app.use(express.json())

// Set up the connection to the database
const sequelize = new Sequelize(process.env.DB_URL, {
    dialect: 'postgres',
    logging: false,
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    }
})

// Test the connection
sequelize.sync()
    .then(() => {
        console.log('Database connected')
    })
    .catch((err) => {
        console.log('Error connecting to database', err)
    })

// Define the routes
app.get('/', (req, res) => {
    res.send('Hello World!')
})

// app.use('/tests', testRoutes)
const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})

// pool.initialize()
//     .then(() => {
//         console.log("Data Source initialized!")
//     })
//     .catch((err) => {
//         console.error(err)
//     })