//connection information

const mysql = require('mysql');


//Creating Connection Variable with all credential 

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Root@2019@",
    database: "burgers_db"
});

//Check the connection from above creditional 

connection.connect(function (err) {

    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("Databse Connected as id " + connection.threadId);
});

//Export the connection
module.exports = connection; 
