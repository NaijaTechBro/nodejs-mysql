const dbConfig = require('../config/db.Config');
const { Sequelize, DataTypes } = require('sequelize');
const { logEvents } = require('../middleware/logger');

const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD, {
        host: dbConfig.HOST,
        dialect: dbConfig.dialect,
        operatorsAliases: false,

        pool: {
            max: dbConfig.pool.max,
            min: dbConfig.pool.min,
            acquire: dbConfig.pool.acquire,
            idle: dbConfig.pool.idle,
        }
    }
)

// Authentication

sequelize.authenticate()
.then(() => {
    console.log('mysql connection was successful...')
})
.catch(error => {
    console.log('Error'+ error)
    logEvents(`${error.no}: ${error.code}\t${error.syscall}\t${error.hostname}`, 'sqliErrlog.log')
})

const db  = {}
    db.Sequelize = Sequelize
    db.sequelize = sequelize

    db.products = require('./productModel.js')(sequelize, DataTypes)
    db.reviews = require('./reviewModel.js')(sequelize, DataTypes)

    db.sequelize.sync({ force: false })
    .then(() => {
        console.log('yes re-sync done!')
    })


    module.exports = db