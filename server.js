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