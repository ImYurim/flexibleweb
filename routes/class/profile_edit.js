var express =require('express');
var router = express.Router();

router.get('/', function(req, res, next){
    res.render('class/profile_edit', {layout: './class/profile_edit_layout'});
});

module.exports = router;