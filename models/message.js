const mongoose = require('mongoose');
const config = require('../config/database');

// Inventory Schema
const MessageSchema = mongoose.Schema({
  messageId: {
    type: String,
    required: true
  },
  to: {
    type: String,
    required: true
  },
  from: {
    type: String,
    required: true
  },
  subject: {
    type: String,
    required: true
  },
  messageBody: {
    type: String,
    required: true
  },
  timeSent: {
    type: Date,
    required: true
  }
});

const Message = module.exports = mongoose.model('Message', MessageSchema);

module.exports.getMessageById = function(messageId, callback) {
  Message.findById(messageId, callback);
}

module.exports.getMessageByRecipient = function(to, callback) {
  const query = {to: to}
  Message.findOne(query, callback);
}

module.exports.getMessageBySubject = function(subject, callback) {
  const query = {subject: subject}
  Message.findOne(query, callback);
}

module.exports.addMessage = function(newMessage, callback) {
  newMessage.save(callback);
} 