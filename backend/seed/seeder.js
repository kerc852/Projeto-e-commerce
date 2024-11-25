import mongoose from "mongoose";
import products from "./data.js";
import Product from "../models/product.js"

const seedProducts = async () => {
  try {
    await mongoose.connect("mongodb+srv://cabritoaoquadrado:facef123456@kerc-unifacef01.era67.mongodb.net/shopit-v2?retryWrites=true&w=majority&appName=kerc-unifacef01");

    await Product.deleteMany();
    console.log("Produtos deletados");

    await Product.insertMany(products);
    console.log("Produtos adicionados");

    process.exit();

  } catch (error) {
    console.log(error.message);
    process.exit();    
  }
};

seedProducts();