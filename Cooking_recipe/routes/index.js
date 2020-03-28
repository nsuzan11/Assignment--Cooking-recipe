// var express = require('express');
// var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

// module.exports = router;


const router= require('express').Router();

const uiRouter= require('./ui.routes');
const apiRouter= require('./api.routes');
router.use('/',uiRouter);
router.use('/api/v1', apiRouter);
module.exports = router;
