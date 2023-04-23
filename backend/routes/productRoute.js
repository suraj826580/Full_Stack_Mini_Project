const { Router } = require("express");
const { ProductModel } = require("../models/product.model");

const productRouter = Router();

productRouter.get("/", async (req, res) => {
  const products = await ProductModel.find();
  res.send(products);
});

productRouter.post("/", async (req, res) => {
  const product = new ProductModel(req.body);
  await product.save();
  res.send("Data Saved");
});

productRouter.patch("/:id", async (req, res) => {
  const { id } = req.params;
  await ProductModel.findByIdAndUpdate({ _id: id }, req.body);
  res.send("Product Updated");
});

productRouter.delete("/:id", async (req, res) => {
  const { id } = req.params;
  await ProductModel.findByIdAndDelete({ _id: id });
  res.send("Product Deleted");
});

module.exports = { productRouter };
