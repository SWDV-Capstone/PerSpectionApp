var express = require('express');
var app = express();
// app.use(express.json())
var cors = require("cors");
app.use(cors());
app.get('/', function (req, res, next) {
    res.send('Hello Middleware Server!');
    next();
});
var perspectionRoutes = require('./src/perspectionDb/routes');
app.use('/perspectionDb', perspectionRoutes);
app.get('/perspectionDb', function (req, res, next) {
    res.send('Hello PerspectionDb Server!');
    next();
});
var testRoutes = require('./src/tests/routes');
app.use('/tests', testRoutes);
app.get('/tests', function (req, res, next) {
    res.send('Hello Tests Server!');
    next();
});
var pointRoutes = require('./src/points/points.routes');
app.use('/points', pointRoutes);
app.get('/points', function (req, res, next) {
    res.send('Hello Points Server!');
    next();
});
var inspectionRoutes = require('./src/inspections/routes');
app.use('/inspections', inspectionRoutes);
app.get('/inspections', function (req, res, next) {
    res.send('Hello Inspections Server!');
    next();
});
require('dotenv').config();
var port = process.env.PORT || 3000;
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    next();
});
app.listen(port, function () {
    console.log("App listening on port ".concat(port));
});
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
