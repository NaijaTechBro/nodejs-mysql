const productController = require('../controllers/productController')

const router = require('express').Router()

router.post('/addProduct', productController.addProduct);

router.get('/allProducts', productController.getAllProducts);

router.get('/published', productController.getPublishedProduct);


router.get('/getOneProduct/:id', productController.getOneProduct);

router.put('/updateProduct/:id', productController.updateProduct);

router.delete('/deleteProduct/:id', productController.deleteProduct);


module.exports = 
    router;

