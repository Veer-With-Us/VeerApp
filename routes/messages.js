const express = require('express');
const router = express.Router();
const config = require('../config/database');
const Message = require('../models/message');


// Add inventory
router.post('/post', (req, res, next) => {
  let newMessage = new Message({
    messageId: req.body.messageId,
    to: req.body.to,
    from: req.body.from,
    subject: req.body.subject,
    messageBody: req.body.messageBody,
    timeSent: req.body.timeSent
  });

  Inventory.addMessage(newMessage, (err, message) => {
    if (err) {
      res.json({success: false, msg: 'Failed to add message to database'});
    } else {
      res.json({success: true, msg: 'Message added to database'});
    }
  });
});

module.exports = router;