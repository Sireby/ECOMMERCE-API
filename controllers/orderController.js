const Order = require ('../models/order')
// const Product = require ('../models/product')


// CREATE ORDER 

const createOrder = (async (req, res) => {
    const newOrder = new Order(req.body);

  try {
    const savedOrder = await newOrder.save();
    res.status(200).json(savedOrder);
  } catch (err) {
    res.status(500).json(err);
  }
    res.send('Order created successfully!')
})


//UPDATE ORDER 
const updateOrder = (async (req, res) => {
    try {
        const updatedOrder = await Order.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        );
        res.status(200).json(updatedOrder);
      } catch (err) {
        res.status(500).json(err);
      }
    res.send('Order updated successfully!')
})

const getAllOrders = (async (req, res) => {
    res.send('Get all orders!')
})

const getSingleOrder = (async (req, res) => {
    res.send('Get single order!')
})




module.exports = {
    createOrder,
    updateOrder,
    getAllOrders,
    getSingleOrder,
}