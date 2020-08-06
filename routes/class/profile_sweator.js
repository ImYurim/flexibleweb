var express =require('express');
var router = express.Router();

router.get('/', function(req, res, next){
    res.render('class/profile_sweator', {layout: './class/classplanlayout_temp'});
});

module.exports = router;