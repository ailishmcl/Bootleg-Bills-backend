// First Require Mongoose
const mongoose = require('mongoose');


// Build Product Schema 
const productSchema = mongoose.Schema({

    productName: {
        type: String,
        required: true,
        maxlength: [100, "Product name exceeds character limit"]

    },
    productPrice: {
        type: Number,
        required: true

    },
    productDescription: {
        type: String,
        required: true,
        maxlength: [600, "Product description exceeds character limit"]

    },
    productStock: {
        type: Number,
        required: true

    },
    productImageUrls: [{
        type: String,
        maxlength: [500, "Product description exceeds character limit"]
    }],
    productSourceType: {
        type: String,
        required: true
    },
    productSource: {
        type: String,
        maxlength: [100, "Creator name exceeds character limit"]
    },
    productAudio: {
        type: String,
    }


},
{
    timestamps: true // createdAt and updatedAt etc
});


// Initializing Product Model
const Product = mongoose.model("Product", productSchema);



module.exports = {Product};