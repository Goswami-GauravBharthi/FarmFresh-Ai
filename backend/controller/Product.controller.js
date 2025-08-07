

// controllers/productController.js
// import Product from '../models/Product.js';

import { Product } from "../models/product.model.js";

export const addProduct = async (req, res) => {
  const {
    name,
    description,
    price_per_unit,
    quantity,
    unit,
    category,
    photo_url,
  } = req.body;

  farm=req.id;

  if (!name || !price_per_unit || !quantity || !unit || !category || !farm) {
    return res
      .status(400)
      .json({ success: false, message: "Missing required fields." });
  }

  try {
    const newProduct = new Product({
      name,
      description,
      price_per_unit,
      quantity,
      unit,
      category,
      photo_url,
      farm,
    });

    const savedProduct = await newProduct.save();

    res.status(201).json({
      success: true,
      message: "Product added successfully.",
      product: savedProduct
    });
  } catch (error) {
    console.error("Error adding product:", error);
    res.status(500).json({ success: false, message: "Server error." });
  }
};


export const deleteProduct = async (req, res) => {
  const { id } = req.id;

  try {
    // Check if product exists
    const product = await Product.findById(id);

    if (!product) {
      return res.status(404).json({ success: false, message: 'Product not found' });
    }

    // Delete the product
    await Product.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      message: 'Product deleted successfully'
    });
  } catch (error) {
    console.error('Error deleting product:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

export const getMyProducts = async (req, res) => {
  const farmerId = req.id; // 🛡️ Coming from auth middleware

  try {
    const products = await Product.find({ farm: farmerId });

    res.status(200).json({
      success: true,
      products,
    });
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find(); // optional farmer info

    res.status(200).json({
      success: true,
      count: products.length,
      products,
    });
  } catch (error) {
    console.error("Error fetching all products:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};