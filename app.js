// require('dotenv').config();

// const express = require('express');
// const chalk = require('chalk');

// // Security
// const helmet = require('helmet');
// const cors = require('cors');
// const xss = require('xss-clean');

// const app = express();
// const http = require('http');
// const path = require('path');
// const { logger } = require('./middleware/logger');
// const errorHandler = require('./middleware/errorMiddleware');
// const bodyParser = require('body-parser');
// const cookieParser = require("cookie-parser");

// const server  = http.createServer(app);

// const corOptions = {
//     origin: 'http://localhost:7890'
// }

// // routes imports

// const router = require('./routes/productRoutes')

// // middleware

// app.use(express.json())
// app.use(logger)
// app.use(errorHandler)

// app.use(express.urlencoded({ extended: true}))

// // Routes
// app.use('/api/products', router)

// // Testing API
// app.get('/', (req, res) => {
//     res.json({ message: "hello from me"})
// })


// // Connecting to Database Environments
// console.log(chalk.redBright(process.env.NODE_ENV));

// // Cross Origin Resource Sharing
// app.use(cors(corOptions));


// app.use(express.json({ limit: "30mb", extended: true}))
// app.use(helmet());
// app.use(xss());
// app.use(cookieParser())
// app.use(express.urlencoded({ limit: "30mb", extended: false}))
// app.use(bodyParser.json())

// // Main Routes
// app.use('/', express.static(path.join(__dirname, 'public')))
// app.use('/', require('./routes/root'))
// app.all('*', (req, res) => {
//     res.status(404)
//     if (req.accepts('html')) {
//         res.sendFile(path.join(__dirname, 'views', '404.html'))
//     } else if (req.accepts('json')) {
//         res.json({ message: '404 Not Found' })
//     } else {
//         res.type('txt').send('404 Not Found')
//     }
// })
// // Error Middleware



// module.exports = app;