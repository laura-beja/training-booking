var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

/* GET about page. */
router.get('/about', (req, res) => {
  res.render('pages/about', { title: 'About' });
});

/* GET help page. */
router.get('/help', (req, res) => {
  res.render('pages/help', { title: 'Help' });
});

module.exports = router;

// router.get('/', (req, res) => {
//   res.render('home', { title: 'Training Session Booking' });
// });