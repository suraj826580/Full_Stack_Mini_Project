const { default: mongoose } = require("mongoose");

const ProductSchema = mongoose.Schema(
  {
    title: { type: String, require: true },
    price: { type: Number, require: true },
    color: { type: String, require: true },
    size: { type: Array, require: true },
    product_Details: { type: String, require: true },
  },
  {
    versionKey: false,
  }
);
const ProductModel = mongoose.model("product", ProductSchema);

module.exports = { ProductModel };
