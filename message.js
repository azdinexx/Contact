const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please enter your name'],
    trim: true,
    maxLength: [50, 'Your name cannot exceed 50 characters'],
  },
  email: {
    type: String,
    required: [true, 'Please enter your email'],
    trim: true,
    maxLength: [50, 'Your email cannot exceed 50 characters'],
  },
  message: {
    type: String,
    required: [true, 'Please enter your message'],
    trim: true,
    maxLength: [500, 'Your message cannot exceed 500 characters'],
  },
});

module.exports = mongoose.model('Message', messageSchema);
