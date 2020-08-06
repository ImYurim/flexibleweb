var express = require('express');
var router = express.Router();
var bcrypt = require('bcrypt-nodejs');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
  
});


   var keystring = "$2a$10$b0s6BGOi1QsMvwYd5SpjZeLkax8cdVJFKhZYL72jnhnClj9c88LK6";

   var result = bcrypt.compareSync('park1031!!', keystring);

   const salt = bcrypt.genSaltSync(10);
   const crypto = bcrypt.hashSync("park1031!!", salt);

   var anotherresult = bcrypt.compareSync('park1031!!', crypto);
  //  var crypto = bcrypt.hash('park1031!!', 10, function(err, hash){
     
  //  });
   console.log(result);
   console.log(crypto);
   console.log(anotherresult);


module.exports = router;
