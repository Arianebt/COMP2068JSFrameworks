var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Travel Blog' });
});

router.get('/destination1', function(req, res, next) {
  res.render('destination1', { title: 'Travel Blog - Paris', destination: 'Meeting Paris' });
});

router.get('/destination2', function(req, res, next) {
  res.render('destination2', { title: 'Travel Blog - Amsterdam', destination: 'Amsterdam' });
});

router.get('/destination3', function(req, res, next) {
  res.render('destination3', { title: 'Travel Blog - Berlin', destination: 'What to expect in Berlin' });
});

router.get('/destination4', function(req, res, next) {
  res.render('destination4', { title: 'Travel Blog - Rio de Janeiro', destination: 'Rio de Janeiro' });
});

module.exports = router;
