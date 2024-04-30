const express = require('express')
const cors = require("cors");
const perspectionRoutes = require('./src/perspectionDb/routes')

require('dotenv').config()
// const { Sequelize } = require('sequelize')

const app = express()
const port = process.env.PORT || 3000

// app.use(express.json())
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
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
    res.send('Hello Renders!')
    // res.send('Hello World!')
})

app.use('/perspectionDb', perspectionRoutes)

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})