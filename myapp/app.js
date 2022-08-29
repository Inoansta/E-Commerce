var createError = require('http-errors');
var express = require('express');
const session = require("express-session");
const validator = require("email-validator")
const { v4: uuidv4 } = require("uuid");
require('dotenv').config();
const {User, Cart, Order} = require("./Model/Models.js");
const path = require('path');
const products = require('./Model/Products');
var app = express();

app.use(express.json());
app.use('/Model', express.static(path.join(__dirname + '/Model')));
app.use('/views', express.static(path.join(__dirname + '/views')));
app.use(
  session({
    name: "SESSIONID",
    secret: process.env.SESSION_KEY,
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 1000 * 60 * 30 },
    genid: function (req) {
      return uuidv4(); // use UUIDs for session IDs
    },
  })
);

app.get('/duperror', (req, res) => {
  res.sendFile(__dirname + '/views/Registeralreadyerror.html');
})

app.get('/errorerror', (req, res) => {
  res.sendFile(__dirname + "/views/Error.html")
})

app.get('/register', (req, res) => {
  res.sendFile(__dirname + '/views/Register.html');
})

app.post('/register', async (req, res) => {
  const {username, password, email} = req.body;
  if(validator.validate(email)){
    var new_user = new User({
      username: username,
      password: password,
      email: email
    })
     new_user.save(function(err){
      if (err && err.code === 11000 ) {
    
      res.write('/duperror');
      res.end();
      }
      else if(err){
        res.write('/errorerror');
        return res.end()
      }
      else{
        res.write('/login');
        return res.end();
      }
    });
  }
  else{
    res.write('/register');
      res.end();
  }
})


app.get('/login', (req, res) => {
  res.sendFile(__dirname + '/views/Login.html');
})

//TODO do the href
//TODO Redirect to product
app.get('/error', (req, res) => {
  res.sendFile(__dirname + '/views/Loginerror.html');
})

app.post('/login', async (req, res) => {
  const {username, password} = req.body;
  if(username && password){
    const user = await User.findOne({username: username, password: password});

    if (user) {
      
        req.session.userId = user.email;
        return res.send('/homepage')
        
    }
    else{
      res.write('/error')
return res.end();
    }
}
res.write('/error')
return res.end();
  }
)

app.get('/homepage', (req, res) => {
  res.sendFile(__dirname + '/views/Homepage.html')
})

app.get('/product', (req, res) => {
  res.sendFile(__dirname+ '/views/Products.html')
})

app.post('/product', async (req, res) => {
  //Add to cart
  const { name, quantity, price, brand, productId} = req.body;
  const userId = req.session.userId;
  let cart = await Cart.findOne({userId});

  if(cart){
    let itemIndex = cart.products.findIndex(p => p.productId == productId);
    if (itemIndex > -1) {
      let productItem = cart.products[itemIndex];
      productItem.quantity += quantity;
      cart.products[itemIndex] = productItem;
    }
    else {
      cart.products.push({ productId, name, price, brand, quantity});
    }
    cart = await cart.save();
    res.write('The products are added to your cart successfully');
    res.write(`
    <br><a href='/homepage'>Back to Home</a>
    `)
    res.end();
  }
  else{
    const newCart = await Cart.create({
      userId,
      products: [{
        name, quantity, price, brand, productId
      }]
    })
    res.write('The products are added to your cart successfully');
    res.write(`
      <br><a href='/homepage'>Back to Home</a>
    `)
    res.end();
  }


})

app.get('/cart', (req, res) => {
  
})

app.post('/cart', async (req, res) => {
  //Add to Order
  const {products} = req.body;
  const userId = req.session.userId;
  const date = new Date().toLocaleString();
  const status = "Pending"; //TODO make it update
  const newOrder = await Order.create({
    userId,
    products,
    status,
    date
  })
  res.write('The order is successful!');
  res.write(`
    <br><a href='/homepage'>Back to Home</a>
  `)
  res.end();
})

app.get('/orders', (req, res) => {
  
})

app.get("*", function (req, res) {
  res.status(404).send("404 Not Found Error. Type the right url");
});
module.exports = app;
