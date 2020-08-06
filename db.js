var mysql = require('mysql');

var mysqlConnection = mysql.createConnection({
    host : 'localhost',
    user : 'jimi',
    password : 'jimi0622',
    database : 'newsweting',
    multipleStatements : true
});

mysqlConnection.connect((err)=>{
    if(!err)
    {
        console.log('Connected');
    }

    else{
        console.log("Connect failed");
    }
});

module.exports = mysqlConnection;