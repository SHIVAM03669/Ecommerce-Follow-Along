const express = require('express');
const router = express.Router();
const Order = require('../model/order');
const User = require('../model/user');

router.post('/place-order', async (req, res) => {
    try {
        const { email, orderItems, shippingAddress } = req.body;


        //Validate request data
        if (!email) {
            return res.status(400).json({ message: 'Email is required' });
        }
        if (!orderItems || !Array.isArray(orderItems) || orderItems.length === 0) {
            return res.status(400).json({ message: 'Order items are required' });
        }
        if (!shippingAddress) {
            return res.status(400).json({ message: 'Shipping address is required' });
        }

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        const orderPromise = orderItems.map(async (item) => {
            const totalAmount = item.price * item.quantity;
            const order = new Order({
                user: user._id,
                orderItems: [item],
                shippingAddress,
                totalAmount
            });
            return order.save();
        });

        const orders = await Promise.all(orderPromise);


        //Clear user's cart after placing order
        await Cart.deleteMany({ user: user._id });
        res.status(201).json({message: 'Order placed and cart cleared successfully',orders});

    }
    catch (error) {
        console.error('Error in placing order: ', error);
        res.status(500).json({ message: error.message});
    }



    
});