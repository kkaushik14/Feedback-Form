const express = require('express');
const router = express.Router();
const Feedback = require('../models/Feedback');

router.post('/', async (req, res) => {
  const { name, email, feedback } = req.body;
  if (!name || !email || !feedback) {
    return res.status(400).json({ error: 'All fields are required.' });
  }
  try {
    await Feedback.create({ name, email, feedback });
    res.status(200).json({ message: 'Feedback received.' });
  } catch (err) {
    res.status(500).json({ error: 'Database error.' });
  }
});

module.exports = router;
