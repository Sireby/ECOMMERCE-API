


// router.post("/", cartController.createOrder);

// router.get("/:cartId", cartController.getOrder);

// router.get("/show/:userId", cartController.getAllOrders);
// // router.get("/cart", verifyUser, cartController.cart);

// module.exports = router;

// const Cart = require("../models/cart");
// const {
//   verifyToken,
//   verifyTokenAndAuthorization,
//   verifyTokenAndAdmin,
// } = require("./verifyToken");

const router = require("express").Router();

//CREATE
     const {
          createCart,
          updateCart,
          deleteCart,
          userProducts,
          allProducts,
      } = require("../controllers/orderController");
      
      router.route('/').post(createCart).patch(updateCart).delete(deleteCart)
      
      router.route('/allProducts').get(allProducts)
      
      router.route('/:id').get(userProducts)
      

module.exports = router;

