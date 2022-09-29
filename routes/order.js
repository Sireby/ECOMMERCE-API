const router = require("express").Router();
const {
    createOrder,
    updateOrder,
    getAllOrders,
    getSingleOrder,
} = require("../controllers/orderController");

router.route('/').post(createOrder)

router.route('/AllOrders').get(getAllOrders)

router.route('/:id').get(getSingleOrder).patch(updateOrder)


module.exports = router;