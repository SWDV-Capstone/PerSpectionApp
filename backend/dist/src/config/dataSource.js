// Set up the connection to the database
var Pool = require('pg').Pool;
var pool = new Pool({
    type: 'postgres',
    user: 'admin',
    host: 'dpg-co07ge8cmk4c73b650tg-a',
    database: 'perspectiveapp',
    password: 'KqAiCAkiyXEs0ivOiaGbgzAWNBytlVNM',
    port: 5432,
    synchronize: true,
});
module.exports = pool;
