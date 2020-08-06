var express = require('express');
var router = express.Router();
var db = require('../db');

router.get('/', function(req, res){
    db.query("SELECT * FROM testuser", (err, rows, fields)=>{
        if(!err)
        {
            console.log("rows: "+JSON.stringify(rows));
            console.log("rows.length: "+ rows.length);
            console.log("rows[0] : "+rows[0]);
            // res.send(rows);
            res.redirect("/");
            
        }

        else{
            console.log(err);
            console.log('bad');
        }
    });
    
});

module.exports = router;