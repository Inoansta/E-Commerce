const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: { type: String, unique: true, required: true },
  username: { type: String, unique: true, required: true},
  password: { type: String, required: true},
});

const cartSchema = new Schema({
    userId: {
        type: String
    },
    products: [
        {
            productId: String,
            brand: String,
            quantity: Number,
            name: String,
            price: Number
        }
    ]
    

});

const orderSchema = new Schema({
    userId: {
        type: String
    },
    status: { type: String},
    products: [
        {
            productId: String,
            brand: String,
            quantity: Number,
            name: String,
            price: Number
        }
    ],
    date:{
        type: String
    }
    //TODO may be date?
})

const adminSchema = new Schema({
    //TODO

})
const User = mongoose.model("User", userSchema, "User");
const Cart = mongoose.model("Cart", cartSchema, "Cart");
const Order = mongoose.model("Order", orderSchema, "Order");
//TODO schema for admin

module.exports = {User, Cart, Order};