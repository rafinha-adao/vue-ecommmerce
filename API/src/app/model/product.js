const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    img: {  
        name: ImageBitmap,
        image: Buffer,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Product", ProductSchema);