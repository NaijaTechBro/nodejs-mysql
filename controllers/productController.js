const db = require('../models')

// create main Model
const Product = db.products
const Review = db.reviews

// main work

// create product

const addProduct = async (req, res) => {

    let info = {
        title: req.body.title,
        price: req.body.price,
        description: req.body.description,
        published: req.body.published ? req.body.published : false
    }

    const product = await Product.create(info)
    res.status(200).send(product)
}

// Get All Products
const getAllproducts = async (req, res) => {
    let products = await Product.findAll({})
    res.status(200).send(products)
}