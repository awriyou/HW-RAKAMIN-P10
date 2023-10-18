const Sequelize = require('sequelize');
const db = new Sequelize('P10', 'postgres', 'postgres', {
    dialect : 'postgres',
    host : 'localhost'
})

module.exports = db;