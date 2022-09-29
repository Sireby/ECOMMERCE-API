const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
  {
    // user: { type: string,    
    //         required: true },

    // productId: {
    //       type: String,
    //     },

    quantity: {
         type: Number,
          default: 1,
        },
    
    price: { type: Number, required: true },

    address: { type: Object, required: true },
    
    status: { type: String, default: "pending" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", OrderSchema);