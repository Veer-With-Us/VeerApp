const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const Inventory = require('../models/inventory');


// Add inventory
router.post('/add', (req, res, next) => {
  let newInventory = new Inventory({
    productId: req.body.productId,
    productName: req.body.productName,
    unitPrice: req.body.unitPrice,
    itemQuantity: req.body.itemQuantity
  });

  Inventory.addInventory(newInventory, (err, inventory) => {
    if (err) {
      res.json({success: false, msg: 'Failed to add product to inventory'});
    } else {
      res.json({success: true, msg: 'Product added to inventory'});
    }
  });
});

module.exports = router;