require('dotenv').config();
const express = require('express');
const connectDB = require('./db');
const Message = require('./message');
const app = express();
connectDB();
app.use(express.json());

app.post('/api/v1/contact', async (req, res) => {
  const { name, email, message } = req.body;
  const newMessage = new Message({ name, email, message });

  try {
    const savedMessaged = await newMessage.save();
    res.status(200).json('message sent');
  } catch (err) {
    res.send('error');
  }
});

app.listen(8000);
