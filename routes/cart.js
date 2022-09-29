// const router = require("express").Router();
// const { deleteBlog,
//      updateBlog, 
//      getAll, 
//      getOne

// } = require("../controllers/cartController");



// router.post("/", cartController.createOrder);

// router.get("/:cartId", cartController.getOrder);

// router.get("/show/:userId", cartController.getAllOrders);
// // router.get("/cart", verifyUser, cartController.cart);

// module.exports = router;

const Cart = require("../models/cart");
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");

const router = require("express").Router();

//CREATE

router.post("/", verifyToken, async (req, res) => {
  const newCart = new Cart(req.body);

  try {
    const savedCart = await newCart.save();
    res.status(200).json(savedCart);
  } catch (err) {
    res.status(500).json(err);
  }
});

//UPDATE
router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {
  try {
    const updatedCart = await Cart.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedCart);
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE
router.delete("/:id", verifyTokenAndAuthorization, async (req, res) => {
  try {
    await Cart.findByIdAndDelete(req.params.id);
    res.status(200).json("Cart has been deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET USER CART
router.get("/find/:userId", verifyTokenAndAuthorization, async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.params.userId });
    res.status(200).json(cart);
  } catch (err) {
    res.status(500).json(err);
  }
});

// //GET ALL

router.get("/", verifyTokenAndAdmin, async (req, res) => {
  try {
    const carts = await Cart.find();
    res.status(200).json(carts);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

// const express = require("express");
// { deleteBlog, updateBlog, getAll, getOne,  } = require("../controllers/blog-controllers");
 
// const router = express.Router();

// router.get('/', getAll);
// router.route("/:id").delete(deleteBlog).patch(updateBlog).get(getOne);

// module.exports = router;