const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  products: [
    {
      name: {
        type: String,
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
      totalPrice: {
        type: Number,
        required: true,
      },
      shippingAddress: {
        name: {
          type: String,
          required: true,
        },
        mobileNumber: {
          type: String,
          required: true,
        },
        houseNo: {
          type: String,
          required: true,
        },
        street: {
          type: String,
          required: true,
        },
        landmark: {
          type: String,
        },
        postalCode: {
          type: String,
        },
      },
      paymentMethod: {
        type: String,
        required: true,
      },
      createdAt: {
        type: Date,
        default: Date.now,
      },
    },
  ],
});

const Order = mongoose.model("Order", orderSchema);
module.exports = Order;
