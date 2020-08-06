var express =require('express');
var router = express.Router();

router.get('/', function(req, res, next){
    res.render('class/classplan', {layout: './class/classplanlayout'});
});

module.exports = router;