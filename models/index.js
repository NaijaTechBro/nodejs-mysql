const dbConfig = require('../config/db.Config');
const { Sequelize, DataTypes } = require('sequelize');

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
})

const db  = {}
    db.Sequelize = Sequelize
    db.sequelize = sequelize

    db.products = require('./productModel.js')(sequelize, DataTypes)