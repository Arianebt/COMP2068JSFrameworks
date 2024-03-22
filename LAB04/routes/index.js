var express = require('express');
var router = express.Router();

router.get('/destination1', function(req, res, next) {
    res.render('destination1', { title: 'Destination 1', destination: 'Destination 1 Info' });
});

router.get('/destination2', function(req, res, next) {
    res.render('destination2', { title: 'Destination 2', destination: 'Destination 2 Info' });
});

router.get('/destination3', function(req, res, next) {
    res.render('destination3', { title: 'Destination 3', destination: 'Destination 3 Info' });
});

router.get('/destination4', function(req, res, next) {
    res.render('destination4', { title: 'Destination 4', destination: 'Destination 4 Info' });
});

module.exports = router;

