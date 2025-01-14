import express from 'express';
import { singleProduct, addProduct, removeProduct, listProducts } from '../controllers/productController.js';

const productrouter = express.Router();

// Route to get a single product
productrouter.get('/single', singleProduct);

// Route to add a new product
productrouter.post('/add', addProduct);

// Route to remove a product
productrouter.delete('/remove', removeProduct);

// Route to list all products
productrouter.get('/list', listProducts);

export default productrouter;