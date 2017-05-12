const express = require('express');
const router = express.Router();
const config = require('../config/database');
const Customer = require('../models/customer');


// Register
router.post('/register', (req, res, next) => {
  let newCustomer = new Customer({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    emailAddress: req.body.email
  });

  Customer.addCustomer(newCustomer, (err, customer) => {
    if (err) {
      res.json({success: false, msg: 'Failed to add customer'});
    } else {
      res.json({success: true, msg: 'Customer added to database'});
    }
  });
});

module.exports = router;