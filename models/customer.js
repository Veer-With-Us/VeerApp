const mongoose = require('mongoose');
const config = require('../config/database');

// Customer Schema
const CustomerSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  emailAddress: {
    type: String,
    required: true
  }
});

const Customer = module.exports = mongoose.model('Customer', CustomerSchema);

module.exports.getCustomerById = function(id, callback) {
  Customer.findById(id, callback);
}

module.exports.getCustomerByEmail = function(emailAddress, callback) {
  const query = {emailAddress: emailAddress}
  Customer.findOne(query, callback);
}

module.exports.addCustomer = function(newCustomer, callback) {
  newCustomer.save(callback);
} 