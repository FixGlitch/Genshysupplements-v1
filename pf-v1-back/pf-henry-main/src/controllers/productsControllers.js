const Products = require('../models/products');

const addProduct = async (product) => {
    try {
        const newProduct = new Products(product);
        const createdProduct = await newProduct.save();
        return createdProduct;
    }catch (err) {
        throw new Error(err)
    }
};

module.exports = {addProduct};