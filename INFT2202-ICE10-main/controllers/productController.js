const productModel = require('../models/productModel');

exports.productList = async (req, res) => {
  try {
    let products = await productModel.find().lean().exec();
    res.render('products', {products: products});
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.productShow = async (req, res) => {
  try {
    let product = await productModel.findById(req.params.id).lean().exec();
    res.render('product/show', {product: product});
  } catch (err) {
    res.status(500).send(err);
  }
};