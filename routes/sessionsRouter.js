const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  // Create a new session
});

/* GET sessions page. */
router.get('/sessions', (req, res) => {
  res.render('pages/sessions', { title: 'Training Sessions' });
});

router.put('/:id', (req, res) => {
  // Update a specific session
});

router.delete('/:id', (req, res) => {
  // Delete a specific session
});

module.exports = router;