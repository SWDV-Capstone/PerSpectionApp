var express = require('express');
var cors = require("cors");
var testRoutes = require('./src/test/routes');
require('dotenv').config();
var Sequelize = require('sequelize').Sequelize;
var app = express();
// app.use(express.json());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
  });



// Set up the connection to the database
var sequelize = new Sequelize(process.env.DB_URL, {
    dialect: 'postgres',
    logging: false,
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    }
});
// Test the connection
sequelize.sync()
    .then(function () {
    console.log('Database connected');
})
    .catch(function (err) {
    console.log('Error connecting to database', err);
});
// Define the routes
app.get('/', function (req, res) {
    res.send('Hello World!');
});
// app.use('/tests', testRoutes)
var port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log("Server is running on port ".concat(port));
});
// pool.initialize()
//     .then(() => {
//         console.log("Data Source initialized!")
//     })
//     .catch((err) => {
//         console.error(err)
//     })
