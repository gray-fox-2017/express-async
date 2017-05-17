var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Let\'s Speak JSON!' });
});

router.get('/api/says',function(req,res,next) {
  res.render('says',{title:'Let\'s Speak JSON!'});
});

router.post('/api/says',function(req,res,next) {
  let says = req.body.word.toUpperCase();
  res.json({
    data: {
      says: `${says}`
    }
  });
});

module.exports = router;
