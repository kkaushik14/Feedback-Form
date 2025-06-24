const express = require('express');
const router = express.Router();
const Feedback = require('../models/Feedback');

// Get all feedbacks
router.get('/', async (req, res) => {
  try {
    const feedbacks = await Feedback.find({});
    res.json(feedbacks);
  } catch (e) {
    res.status(500).json({ error: 'Failed to fetch feedbacks.' });
  }
});

// Submit feedback
router.post('/', async (req, res) => {
  const { name, email, movname, rating, feedback } = req.body;
  if (!name || !email || !movname || !rating || !feedback) {
    return res.status(400).json({ error: 'All fields are required.' });
  }
  try {
    await Feedback.create({ name, email, movname, rating, feedback });
    res.status(200).json({ message: 'Feedback received.' });
  } catch (err) {
    res.status(500).json({ error: 'Database error.' });
  }
});

module.exports = router;
