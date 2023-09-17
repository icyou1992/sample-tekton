import mysql from 'mysql';

const port = 3306;

const connection = mysql.createConnection({
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

export default connection;