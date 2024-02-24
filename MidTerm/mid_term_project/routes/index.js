var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

/* GET student page. */
router.get('/student', function(req, res, next) {
  res.render('student', { title: 'Student' });
});


module.exports = router;
