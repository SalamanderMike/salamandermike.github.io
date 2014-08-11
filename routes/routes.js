var express = require('express'),
    router = express.Router();


router.get('/', function (req, res) {
	res.redirect('/home');
});

router.get('/home', function (req, res) {
	res.render('home');
});

router.get('/about', function (req, res) {
	res.render('about');
});

router.get('/contact', function (req, res) {
	res.render('contact');
});

router.get('/portfolio', function (req, res) {
	res.render('portfolio');
});












module.exports = router;

