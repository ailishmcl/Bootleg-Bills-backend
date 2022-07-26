const mongoose = require('mongoose');

// Order model schema

const orderSchema = mongoose.Schema({
    orderRef: {
        type: Number,
    },
    user: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }],
    cart: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Cart"
    }],
    totalPrice: {
        type: Number,
        required: true
    },
    paymentDetails: {
        cardNumber: {
            type: Number,
            required: true,
            length: [16, 'Your card number must be 16 digits']
        },
        expiryDate: {
            type: Date,
            required: true
        },
        cvv: {
            type: Number,
            required: true,
            length: [3, "Your CVV is the three digit number on the back of your card"]
        }
    },
    billingAddress: {
        lineOne: {
            type: String,
            required: true
        },
        lineTwo: {
            type: String,
            required: true
        },
        city: {
            type: String,
            required: true
        },
        country: {
            type: String,
            required: true
        },
        postcode: {
            type: String,
            required: true
        }
    },
    shippingAddress: {
        lineOne: {
            type: String,
            required: true
        },
        lineTwo: {
            type: String,
            required: true
        },
        city: {
            type: String,
            required: true
        },
        country: {
            type: String,
            required: true
        },
        postcode: {
            type: String,
            required: true
        }
    },
    status: {
        type: String,
        lowercase: true,
        default: 'open'
    }
},
{
    timestamps: true
});

const Order = mongoose.model('Order', orderSchema);

module.exports = {Order};