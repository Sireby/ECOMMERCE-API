const Cart = require ('../models/cart')
const Order = require ('../models/order')

const createCart = (async (req, res) => {
    
    res.send('Order created successfully!')
})

const updateCart = (async (req, res) => {
    res.send('Order updated successfully!')
})

// const getAllOrders = (async (req, res) => {
//     res.send('Get all orders!')
// })

// const getSingleOrder = (async (req, res) => {
//     res.send('Get single order!')
// })




module.exports = {
    createCart,
    updateCart,
}