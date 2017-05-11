const mongoose = require('mongoose');
const config = require('../config/database');

// Inventory Schema
const InventorySchema = mongoose.Schema({
  productId: {
    type: String,
    required: true
  },
  productName: {
    type: String,
    required: true
  },
  unitPrice: {
    type: Number,
    required: true
  },
  itemQuantity: {
    type: Number,
    required: true
  }
});

const Inventory = module.exports = mongoose.model('Inventory', InventorySchema);

module.exports.getInventoryById = function(id, callback) {
  Inventory.findById(id, callback);
}

module.exports.getInventoryByProductName = function(productName, callback) {
  const query = {productName: productName}
  Inventory.findOne(query, callback);
}

module.exports.addInventory = function(newInventory, callback) {
  newInventory.save(callback);
} 