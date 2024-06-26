const mongoose = require('mongoose');

// Define the product schema
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    discount: {
        type: Number,
        default: 0,
    },
    category: {
        type: String,
        required: true
    },
    wishlist: {
        type: Boolean,
        default: false,
    },
    stock: {
        type: Boolean,
        default: true,
    },
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Comment',
            default: null,
        },
    ],
    image: {
        type: String,
        default: 'default-product.png',
    }
    // You can add more fields as needed
}, {
    timestamps: true,
});

// Create a model based on the schema
const Product = mongoose.model('Product', productSchema);

module.exports = Product;
