const mysql = require('mysql');	// express 를 가져온 것 처럼 mysql 도 가져오자.
const port = 3306;

connection = mysql.createConnection({
    host:'db-pfe-dev.cw4iktllotnd.ap-northeast-2.rds.amazonaws.com',
    port: port,
    user:'pfe',
    password:'test123!',
    database:'demo',
});

connection.connect(function(err) {
    if (err) {
      console.error('Database connection failed: ' + err.stack);
      return;
    }
  
    console.log('Connected to database.');
});

module.exports = db;