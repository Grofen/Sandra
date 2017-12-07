const express = require('express');
const hbs = require('hbs');
const port = process.env.PORT || 3000;

var {slider} = require('./public/js/script');
var app = express();

app.use(express.static(__dirname + '/public'));
app.set('view engine', 'hbs');

hbs.registerPartials(__dirname + '/views/partials');
hbs.registerHelper('getCurrentYear', () => {
  return new Date().getFullYear();
});
hbs.registerHelper('websiteTitle', () => 'Sandra');

// app.use((req, res, next) => {
//   res.render('maintenance.hbs');
// });

app.get('/', (req, res) => {
  res.render('index.hbs');
});

app.get('/beauty', (req, res) => {
  res.render('beauty.hbs');
});

app.get('/beauty1', (req, res) => {
  res.render('beauty1.hbs');
});

app.get('/beauty2', (req, res) => {
  res.render('beauty2.hbs');
});

app.get('/coat', (req, res) => {
  res.render('coat.outift.hbs');
});

app.get('/home', (req, res) => {
  res.render('home.hbs');
});

app.get('/home1', (req, res) => {
  res.render('home1.hbs');
});

app.get('/home2', (req, res) => {
  res.render('home2.hbs');
});

app.get('/jeanjacket', (req, res) => {
  res.render('jeanjacket.hbs');
});

app.get('/mostpopular', (req, res) => {
  res.render('mostpopular.hbs');
});

app.get('/sweater', (req, res) => {
  res.render('outfit.sweater.hbs');
});

app.get('/outfits', (req, res) => {
  res.render('outfits.hbs');
});

app.get('/plisseskirt', (req, res) => {
  res.render('plisseskirt.outfit.hbs');
});

app.get('/styles', (req, res) => {
  res.render('styles.hbs');
});

app.get('/styles1', (req, res) => {
  res.render('styles1.hbs');
});

app.get('/styles2', (req, res) => {
  res.render('styles2.hbs');
});

app.get('/travel', (req, res) => {
  res.render('travel.hbs');
});

app.get('/travel1articale', (req, res) => {
  res.render('travel1article.hbs');
});

app.get('/travel2articale', (req, res) => {
  res.render('travel2article.hbs');
});

app.get('/shop', (req, res) => {
  res.render('shop.hbs');
});

app.get('/product', (req, res) => {
  res.render('products.hbs');
});

app.get('/about', (req, res) => {
  res.render('about.hbs');
});

app.get('/contact', (req, res) => {
  res.render('contact.hbs');
});

app.listen(port, () => {
  console.log(`App is up on port: ${port}`);
});
