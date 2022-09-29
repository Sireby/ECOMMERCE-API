const express = require ('express');
const mongoose = require ('mongoose');
const dotenv = require ('dotenv');
const app = express();



dotenv.config();
const PORT = 5000;


mongoose
.connect(process.env.DB_URL)
.then(() => console.log("DATABASE CONNECTION IS SUCCESSFUL!"))
.catch((err) => 
console.log(err));

//ROUTES
const userRoute = require ('./routes/user')
const orderRoute = require ('./routes/order')
const cartRoute = require ('./routes/cart')




app.use(express.json());
app.use('/user', userRoute);
app.use('/orders', orderRoute);
app.use('/cart', cartRoute)

app.listen(PORT, () => {
    console.log(`SERVER IS RUNNING ON PORT ${PORT}`);
})

