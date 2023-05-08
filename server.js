const express = require('express')
const cors = require('cors')

const app = express()

const corOptions = {
    origin: 'http://localhost:7890'
}

// routes

const router = require('./routes/productRoutes')

// middleware

app.use(cors(corOptions))

app.use(express.json())

app.use(express.urlencoded({ extended: true}))

app.use('/api/products', router)

// Testing API
app.get('/', (req, res) => {
    res.json({ message: "hello from me"})
})

//PORT

const PORT = process.env.PORT || 7890

// Server
app.listen(PORT, () => {
    console.log(`server is running on Port ${PORT}`)
})








// require("dotenv").config();
// const chalk = require('chalk');
// const app = require("./app");
// const PORT = process.env.PORT || PORT;

// const { logger, logEvents } = require('./middleware/logger');

// // Connect to MongoDB
// mongoose.set("strictQuery", true);
// mongoose.connection.once('open', () => {
//     console.log(chalk.green('Connected to MongoDB'))
//     app.listen(PORT, () => console.log(chalk.green(`Server running on port ${PORT}...`)))
// })

// mongoose.connection.on('error', err => {
//     console.log(err)
//     logEvents(`${err.no}: ${err.code}\t${err.syscall}\t${err.hostname}`, 'mongoErrLog.log')
// });